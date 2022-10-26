import {useState} from 'react';
import './form.scss';

// Expects a function to be sent to it as a prop
function Form(props) {

  let [restingMethod, selectedMethod] = useState('get');

  const handleMethod = (e) => {
    e.preventDefault();
    selectedMethod(e.target.id);
  }


  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      method: restingMethod || 'GET',
      url: 'https://pokeapi.co/api/v2/pokemon',
    };
    props.handleApiCall(formData);
  };

  // Example from our standup
  // [counter, setCounter] = useState(0);

  // function useState(initialValue)
  // {
  //   const init = initialValue;
  //   const changeTheValue = () => {
  
  //   }
  //   return [init, changeTheValue];
  // }

  

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label >
          <span>URL: </span>
          <input name='url' type='text' />
          <button type="submit">GO!</button>
        </label>
        <label className="methods">
          <span data-testid="get-test" className="checkClass" onClick={handleMethod} id="get">GET</span>
          <span className="checkClass" id="post">POST</span>
          <span className="checkClass" id="put">PUT</span>
          <span className="checkClass" id="delete">DELETE</span>
        </label>
      </form>
    </>
  );
};


export default Form;
