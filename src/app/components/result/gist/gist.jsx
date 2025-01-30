import { dateToYMD } from '../../../utilities/date';
import PropTypes from 'prop-types';

import './style.css';
export function Gist({data}) {    
  return (
    <div className='gist'>
      <div className='gist__user'>
        <div className='user__avatar'>
          <img src={data.owner.avatar_url} alt="git user"/>
        </div>
        <div className='user__info'>
          <a className='user__name' href={data.owner.html_url} target="_blank" rel="noopener noreferrer">
            <span className='user__name--limit' >{data.owner.login}</span>
            <span>&rarr;</span>
          </a>
          <span>{dateToYMD(new Date(data.created_at))}</span>
        </div>
			</div>
      <div className='gist__desc'>
        <a href={data.html_url} target="_blank" rel="noopener noreferrer">{data.description?data.description:'No Discription Available'}</a>
      </div>
    </div>
  )
}
Gist.propTypes = {
  data: PropTypes.object
};