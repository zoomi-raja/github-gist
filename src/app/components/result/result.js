import { Spinner } from '../ui/spinner';
import { Gist } from './gist/gist';
import './style.css';
export function Result({loading,results}) {
  return (
    <div className='results'>
      {loading && <Spinner />}
      
      {results.map( (gist) => (<Gist key={gist.id} data={gist}/>))}

    </div>
  )
}