import { handleActions } from 'redux-actions';

const initialState = {

};

export const genreReducers = handleActions({
  GET_BOOKS_SUCCESS: (state, { payload: { books } }) => Object.assign({}, state, books)
}, initialState);
