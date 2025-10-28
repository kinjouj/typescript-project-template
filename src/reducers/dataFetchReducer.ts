import type { ActionType, DataFetchStateType } from '../types';

export const dataFetchReducer = (state: DataFetchStateType, action: ActionType<string>): DataFetchStateType => {
  switch (action.type) {
    case 'FETCH_START':
      return state;

    case 'FETCH_SUCCESS':
      return {
        ...state,
        isError: false,
        message: action.payload,
      };

    case 'FETCH_ERROR':
      return {
        ...state,
        isError: true,
        message: null,
      };

    default:
      return state;
  }
};
