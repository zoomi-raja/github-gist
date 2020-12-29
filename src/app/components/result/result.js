import { Spinner } from '../ui/spinner';
import { Gist } from './gist/gist';
import './style.css';
export function Result() {
  return (
    <div className='results'>
      <Spinner />
      {[...Array(5)].map( () => (<Gist />))}

    </div>
  )
}