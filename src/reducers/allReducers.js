import Adventure from './booksCollections/adventure';
import Business from './booksCollections/business';
import Cart from './booksCollections/cart';
import Children from './booksCollections/children';
import { combineReducers } from 'redux';
import Detective from './booksCollections/detectiv';
import Fantasy from './booksCollections/fantasy';
import Humor from './booksCollections/humor';
import Interesting from './booksCollections/interesting';
import LoveStory from './booksCollections/loveStory';
import News from './booksCollections/news';
import Poetry from './booksCollections/poetry';
import Slide from './slide.js';

const allReducers = combineReducers({
  slideitem: Slide,
  newBooks: News,
  interestingBooks: Interesting,
  detectiveBooks: Detective,
  humorBooks: Humor,
  fantasyBooks: Fantasy,
  poetryBooks: Poetry,
  loveStoryBooks: LoveStory,
  childrenBooks: Children,
  businessBooks: Business,
  adventureBooks: Adventure,
  cartBooks: Cart
});

export default allReducers;
