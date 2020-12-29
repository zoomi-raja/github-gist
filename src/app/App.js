import { useCallback, useEffect, useRef, useState } from 'react';

import './App.css';
import { Header } from './components/header/header';
import { Result } from './components/result/result';
import { getByName, getPublicList } from './utilities/requests';

let initState = {
  results: [],
  loading:true,
}
function App() {
  const[search,setSearch]       = useState('');
  const[apiResult,setApiResult] = useState(initState);
  const cache = useRef(new Map());

  useEffect(()=>{
    async function fetchData() {
      const response = await getPublicList();
      console.log(response)
      setApiResult(prev => {
        cache.current.set('',response.data)
        return {
          ...prev,
          loading: false,
          results: response.data?response.data:[]
        }
      });
    }
    fetchData();
  },[])

  useEffect(()=>{
    async function fetchData(search) {
      if(cache.current.has(search)){
        setApiResult(prev => {
          return {
            ...prev,
            loading: false,
            results: cache.current.get(search)
          }
        });
      }else{
        const response = await getByName({username:search})
        console.log(response)
        setApiResult(prev => {
          cache.current.set(search,response.data)
          return {
            ...prev,
            loading: false,
            results: response.data?response.data:[]
          }
        });
      }
    }
    
    fetchData(search)
  },[search,setApiResult])

  const setSearchByName = useCallback((e)=>{
    setSearch( e.target.value);
  },[setSearch]);
  return (
    <div className="App">
      <div className='container'>
        <Header search={search} setSearch={setSearchByName}/>
        <Result {...apiResult}/>
      </div>
    </div>
  );
}

export default App;
