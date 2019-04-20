import { combineReducers } from 'redux';
import Slide from './slide.js';

const allReducers = combineReducers({
  slideitem: Slide
});

export default allReducers;
