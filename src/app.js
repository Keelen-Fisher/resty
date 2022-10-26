import { useState } from 'react';
import axios from 'axios';
import './app.scss';

// Let's talk about using index.js and some other name in the component folder
// There's pros and cons for each way of doing this ...
import Header from './components/header';
import Footer from './components/footer';
import Form from './components/form';
import Results from './components/results';

const App = () => {

  let [data, setData] = useState(null);
  let [requestParams, setRequestParams] = useState({});


  // const handleApiCall = (requestParams) => {
  //   // mock output
  //   const callApiData = {
  //     count: 2,
  //     results: [
  //       { name: 'fake thing 1', url: 'http://fakethings.com/1' },
  //       { name: 'fake thing 2', url: 'http://fakethings.com/2' },
  //     ],
  //   };

    const callApi = async (requestParams) => {
    let newData = await axios.get('https://pokeapi.co/api/v2/pokemon')

    setData(newData.data.results);
    setRequestParams(requestParams);
  }


  return(
<>
      <Header />
      <div>Request Method: {requestParams.method}</div>
      <div>URL: {requestParams.url}</div>
      <Form handleApiCall={callApi} />
      <Results data={data} />
      <Footer />
    </>
    );
  }


export default App;
