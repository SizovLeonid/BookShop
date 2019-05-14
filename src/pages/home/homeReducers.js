import { handleActions } from 'redux-actions';

const initialState = {
  slide: [
    {
      id: 1,
      img: '../../../assets/slider/Knigi_pro_garri_pottera_1.jpg',
      slideHeadline: 'New collection of books “Harry Potter”',
      description: 'A series of novels written by the English writer J. K. Rowling. Books are a chronicle of the adventures of the young wizard Harry Potter, as well as his friends Ron Weasley and Hermione Granger, who study at the school of magic and magic of Hogwarts'
    },
    {
      id: 1,
      img: '../../../assets/slider/Knigi_pro_garri_pottera_1.jpg',
      slideHeadline: 'New collection of books “Harry Potter”',
      description: 'A series of novels written by the English writer J. K. Rowling. Books are a chronicle of the adventures of the young wizard Harry Potter, as well as his friends Ron Weasley and Hermione Granger, who study at the school of magic and magic of Hogwarts'
    },
    {
      id: 1,
      img: '../../../assets/slider/Knigi_pro_garri_pottera_1.jpg',
      slideHeadline: 'New collection of books “Harry Potter”',
      description: 'A series of novels written by the English writer J. K. Rowling. Books are a chronicle of the adventures of the young wizard Harry Potter, as well as his friends Ron Weasley and Hermione Granger, who study at the school of magic and magic of Hogwarts'
    }
  ],
};

export const homeReducers = handleActions({
  GET_BOOKS_SUCCESS: (state, { payload: { books } }) => Object.assign({}, state, books)
}, initialState);
