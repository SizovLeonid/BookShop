import { handleActions } from 'redux-actions';

const initialState = {
  cart: []
};

export const cartReducers = handleActions({
  GET_BOOKS_SUCCESS: (state, { payload: { books } }) => Object.assign({}, state, books)
}, initialState);
