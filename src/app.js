import './app.scss';
import { useEffect, useReducer } from 'react';
import axios from 'axios';
import Header from './components/header';
import Footer from './components/footer';
import Form from './components/form';
import Results from './components/results';
import History from './components/history';
import { historyReducer } from './components/reducer'

const initialState = {
  data: null,
  requestParams: {},
  history: [],
}

function App(){
  const [state, dispatch] = useReducer(historyReducer, initialState);

  useEffect(() => {
    let update = async () => {
      let result = await axios(state.requestParams);
      console.log(result);
      const data = {
        header: result.headers,
        data: result.data
      };
      createData(data);
      historyUpdate(state.requestParams, data);
    }
    if (state.requestParams && state.requestParams.method) {
      update();
    }
  }, [state.requestParams])

  const setReqParams = (requestParams) =>  {
    dispatch({
      type: 'REQ PARAMS',
      payload: requestParams,
    });
  }
  const createData = (data) => {
    dispatch({
      type: 'CREATE DATA',
      payload: data,
    });
  }

  const historyUpdate = (requestParams, data) => {
    let reqHistory = {
      method: requestParams.method,
      url: requestParams.url,
      data: data
    }
    dispatch({
      type: 'HISTORY UPDATE',
      payload: reqHistory
    });
  }

  const callApi = (requestParams) => {
    setReqParams(requestParams);
  }

    return (
      <>
        <Header />
        <div className='request'>Request Method: {state.requestParams.method}</div>
        <div className='url'>URL: {state.requestParams.url}</div>
        <Form ApiCall={callApi} />
        <History history={state.history} />
        <Results data={state.data} headers={state.headers}/>
        <Footer />
      </>
    );
}

export default App;
