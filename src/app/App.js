import { useEffect, useState } from 'react';

import './App.css';
import { Header } from './components/header/header';
import { Result } from './components/result/result';
import { getByName, getPublicList } from './utilities/requests';

let initState = {
  cache: new Map(),
  results: [],
  loading:true,
}
function App() {
  const[search,setSearch]       = useState('');
  const[apiResult,setApiResult] = useState(initState);

  useEffect(()=>{
    async function fetchData() {
      const response = await getPublicList();
      console.log(response)
      // const userResp = await getByName({username:'levimm'})
      setApiResult(prev => {
        prev.cache.set('',response.data)
        return {
          ...prev,
          loading: false,
          results: response.data?response.data:[]
        }
      });
    }
    fetchData();
  },[])
  return (
    <div className="App">
      <div className='container'>
        <Header />
        <Result {...apiResult}/>
      </div>
    </div>
  );
}

export default App;
