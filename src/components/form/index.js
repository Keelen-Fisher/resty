import {useState} from 'react';
import './form.scss';

// Expects a function to be sent to it as a prop
function Form(props) {

  // name of the state/ the function

  let [method, setMethod] = useState('get');
  let [getUrl, setGetUrl] = useState('');

  // const handleMethod = (e) => {
  //   e.preventDefault();
  //   selectedMethod(e.target.id);
  // }


  const handleSubmit = (e) => {
    e.preventDefault();
    props.handleApiCall(getUrl, method);


  // Example from our standup
  // [counter, setCounter] = useState(0);

  // function useState(initialValue)
  // {
  //   const init = initialValue;
  //   const changeTheValue = () => {
  
  //   }
  //   return [init, changeTheValue];
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



// let [ball, setBall] = factory
// let [club, newClub] = bouncer
