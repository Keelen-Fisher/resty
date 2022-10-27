import {useState} from 'react';
import './form.scss';

function Form(props) {


  let [method, setMethod] = useState('get');
  let [getUrl, setGetUrl] = useState('');

  


  const handleSubmit = (e) => {
    e.preventDefault();
    props.handleApiCall(getUrl, method);



  }

  

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label >
          <span>URL: </span>
          <input name='url' type='text' onChange={(e) => setGetUrl(e.target.value)} />
          <button type="submit">GO!</button>
        </label>
        <label className="methods">
          {/* Changing the state of the method */}
        <span id="get" onClick={() => setMethod('GET')} >GET</span>
          <span id="post" onClick={() => setMethod('POST')}>POST</span>
          <span id="put" onClick={() => setMethod('PUT')}>PUT</span>
          <span id="delete" onClick={() => setMethod('DELETE')}>DELETE</span>
        </label>
      </form>
    </>
  );
};


export default Form;

