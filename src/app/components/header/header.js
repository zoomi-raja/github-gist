import { memo } from "react";
import './style.css';
function header({search,setSearch}) {    
  return (
    <div className='header'>
      <input
       type='search'
       className='header__search' 
       placeholder='Search By Name' 
       value={search} 
       onChange={setSearch}/>
    </div>
  )
}
export const Header = memo(header);