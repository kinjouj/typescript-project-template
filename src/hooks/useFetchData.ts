import { useEffect, useReducer } from 'react';
import { dataFetchReducer } from '../reducers/dataFetchReducer';
import type { DataFetchStateType } from '../types';

export default function useFetchData(): DataFetchStateType {
  const [state, dispatch] = useReducer(dataFetchReducer, { message: null, isError: false });

  useEffect(() => {
    let cancelled = false;

    const fetchData = async (): Promise<void> => {
      dispatch({ type: 'FETCH_START' });

      try {
        const res = await fetch('/test.txt');

        if (!res.ok) {
          if (!cancelled) {
            dispatch({ type: 'FETCH_ERROR' });
          }

          return;
        }

        const data = await res.text();

        if (!cancelled) {
          dispatch({ type: 'FETCH_SUCCESS', payload: data });
        }
      } catch {
        if (!cancelled) {
          dispatch({ type: 'FETCH_ERROR' });
        }
      }
    };
    void fetchData();

    return (): void => {
      cancelled = true;
    };
  }, []);

  return state;
}
