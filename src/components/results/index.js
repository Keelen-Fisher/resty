import './style.scss';
import JSONPretty from 'react-json-pretty';
import 'react-json-pretty/themes/monikai.css'

const Results = ({ data }) => {
  return (
    <section data-testid='results-section'>
      {data ?
        (<>
          <span className="results">Results
          <JSONPretty data={data}/>
          </span>
        </>) :
        (<span>Loading........</span>)
      }
    </section>
  );
}
export default Results;
