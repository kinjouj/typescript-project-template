export type ActionType<T> = { type: 'FETCH_START' } | { type: 'FETCH_SUCCESS', payload: T } | { type: 'FETCH_ERROR' };
