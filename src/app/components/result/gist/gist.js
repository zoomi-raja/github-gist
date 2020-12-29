import { dateToYMD } from '../../../utilities/date';
import './style.css';
export function Gist() {    
  return (
    <div className='gist'>
      <div className='gist__user'>
        <div className='user__avatar'>
          <img src='https://avatars1.githubusercontent.com/u/48676961?v=4' alt="git user"/>
        </div>
        <div className='user__info'>
          <a className='user__name' href='https://' target="_blank" rel="noopener noreferrer">
            <span>zoomi</span>
            <span>&rarr;</span>
          </a>
          <span>{dateToYMD(new Date('2020-12-29T09:56:36Z'))}</span>
        </div>
			</div>
      <div className='gist__desc'>
        <a href='https://gist.github.com/ff66629bf211eef1c59d517c9754f51b'>html_url description description</a>
      </div>
    </div>
  )
}