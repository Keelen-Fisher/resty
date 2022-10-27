import './app.scss';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './components/header';
import Footer from './components/footer';
import Form from './components/form';
import Results from './components/results';
import History from './components/history';

const App = () => {

  let [data, setData] = useState(null);
  let [requestParams, setRequestParams] = useState({});
  let [headers, setHeaders] = useState(null);

  useEffect(() => {
    console.log('Testing the good ol useEffect()')
  })

  const callApi = async (url, method) => {

    let newData = await axios({
      method: method,
      url: url,
    });

    let params = 
    { url, 
      method}
    console.log('Form: ', newData);

    setData(newData.data.results);
    setRequestParams(params);
    setHeaders(newData.headers);
  }
    return (
      <>
        <Header />
        <div>Request Method: {requestParams.method}</div>
        <div>URL: {requestParams.url}</div>
        <Form handleApiCall={callApi} />
        <Results data={data} headers={headers} />
        <History/>
        <Footer />
      </>
    );
  
}


export default App;
