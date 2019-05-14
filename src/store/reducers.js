import { cartReducers } from '../pages/cart/cartReducers.js';
import { combineReducers } from 'redux';
import { genreReducers } from 'pages/booksGenre/genreReducers';
import { homeReducers } from 'pages/home/homeReducers';

const reducers = combineReducers({
  books: homeReducers,
  genreBooks: genreReducers,
  cartBooks: cartReducers
});

export default reducers;
