import { NoRecord } from '../ui/no-record/no-record';
import { Spinner } from '../ui/spinner/spinner';
import { Gist } from './gist/gist';

import PropTypes from 'prop-types';

import './style.css';
export function Result({loading,results}) {
  /**init render norecord and loading until data is fetched */
  let html = <NoRecord />
  if(results.length > 0){
    html = results.map( (gist) => (<Gist key={gist.id} data={gist}/>))
  }
  return (
    <div className='results'>
      {loading && <Spinner />}
      { html }
    </div>
  )
}
Result.propTypes = {
  loading: PropTypes.bool,
  results: PropTypes.array
};