import { useEffect, useReducer } from 'react';

import { dataFetchReducer } from '../reducers/dataFetchReducer';
import Dummy from '../components/Dummy';

const Sample = (): React.JSX.Element => {
  const [ state, dispatch ] = useReducer(dataFetchReducer, { message: null, isError: false });
  const { message, isError } = state;

  useEffect(() => {
    dispatch({ type: 'FETCH_START' });
    fetch('/test.txt').then((res) => {
      if (!res.ok) {
        dispatch({ type: 'FETCH_ERROR' });
        return;
      }

      res.text().then((data) => {
        setTimeout(() => {
          dispatch({ type: 'FETCH_SUCCESS', payload: data });
        }, 1000);
      }).catch(() => {
        dispatch({ type: 'FETCH_ERROR' });
      });
    }).catch(() => {
      dispatch({ type: 'FETCH_ERROR' });
    });
  }, []);

  if (isError) {
    return (<h4>Error</h4>);
  }

  if (message === null) {
    return (<h4>loading...</h4>);
  }

  return (
    <div>
      <Dummy message={message} />
    </div>
  );
};

export default Sample;
