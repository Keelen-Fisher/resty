import { useState } from 'react';
import axios from 'axios';
import './app.scss';
import Header from './components/header';
import Footer from './components/footer';
import Form from './components/form';
import Results from './components/results';

const App = () => {

  let [data, setData] = useState(null);
  let [requestParams, setRequestParams] = useState({});



  const callApi = async (url, method) => {
    let newData = await axios ({
      method: method,
      url: url,
    })

    setData(newData.data.results);
    setRequestParams(requestParams);
  }


  return (
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
