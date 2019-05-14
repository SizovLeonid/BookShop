import { createActions } from 'redux-actions';

const identity = x => x;

export const genreActions = createActions({
  GET_BOOKS: identity,
  GET_BOOKS_SUCCESS: identity,
  GET_BOOKS_FAIL: identity
});
