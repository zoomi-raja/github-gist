import { memo } from "react";
import PropTypes from 'prop-types';

import './style.css';
function header({search,setSearch}) {    
  return (
    <div className='header'>
      <input
       type='search'
       className='header__search' 
       placeholder='Search By Name..!' 
       value={search} 
       onChange={setSearch}/>
    </div>
  )
}
header.propTypes = {
  search: PropTypes.string,
  setSearch: PropTypes.func
};
export const Header = memo(header);