import JSONPretty from 'react-json-pretty';
import './style.scss'

function History() {
  return (
    <section className='showcase-history'>
      <span>Here is your History:</span>
      <JSONPretty  name="API Request history"/>
    </section>
  )
}


export default History;

// { apiResultsHistory }
// data={apiResultsHistory}
