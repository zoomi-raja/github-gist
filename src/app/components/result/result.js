import { Gist } from './gist/gist';
import './style.css';
export function Result() {
  return (
    <div className='results'>
      {[...Array(5)].map( () => (<Gist />))}

    </div>
  )
}