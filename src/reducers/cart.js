const cart = [];

export default function (state = cart, action) {
  switch (action.type) {
    case 'ADD_BOOK':
      if (state.indexOf(action.payload) !== -1) {
        return state;
      }
      return [...state, action.payload];
    default:
      return state;
    case 'REMOVE_BOOK':
      return state.filter(book => book.id !== action.id);
  }
}
