import Books from './books';
import Cart from './cart';
import { combineReducers } from 'redux';

const allReducers = combineReducers({
  cart: Cart,
  books: Books
});

export default allReducers;
