import './style.scss';
import JSONPretty from 'react-json-pretty';
import 'react-json-pretty/themes/monikai.css'

const Results = (props) => {
  return (
    <>
    <section data-testid='headers-section'>
      {props.headers?
        (<>
          <span className="headers">Header!
            <JSONPretty data={props.headers} />
          </span>
        </>) :
        (<span>Your Header is Loading........</span>)
      }
    </section>

      <section data-testid='results-section'>
      {props.data ?
        (<>
          <span className="results">Results
            <JSONPretty data={props.data} />
          </span>
        </>) :
        (<span>Your Results are Loading........</span>)
      }
      </section>
    </>
  );
}
export default Results;
