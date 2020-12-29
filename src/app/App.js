import { useEffect } from 'react';

import './App.css';
import { Header } from './components/header/header';
import { Result } from './components/result/result';
import { getByName, getPublicList } from './utilities/requests';

function App() {
  useEffect(()=>{
    async function fetchData() {
      // You can await here
      const response = await getPublicList()
      const userResp = await getByName({username:'levimm'})
      console.log(response,userResp);
      // ...
    }
    fetchData();
    
  })
  return (
    <div className="App">
      <div className='container'>
        <Header />
        <Result />
      </div>
    </div>
  );
}

export default App;
