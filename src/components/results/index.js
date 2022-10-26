import './style.scss';
import JSONPretty from 'react-json-pretty';


const Results = ({ data }) => {
  return (
    <section data-testid='results'>
      {data ?
        (<>
          <span>Results
          <JSONPretty data={data}/>
          </span>
        </>) :
        (<span>Loading........</span>)
      }
    </section>
  );
}
export default Results;
