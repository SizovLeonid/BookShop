const cart = [];
export default function (state = cart, action) {
  switch (action.type) {
    case 'ADD_BOOK':
      return [...state, action.payload];
    case 'REMOVE_BOOK':
      return [...state, state.filter((book) => action.payload.id !== book.id)];
    default:
      return state;
  }
}
