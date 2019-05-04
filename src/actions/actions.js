export const AddBook = (book) => {
  return {
    type: 'ADD_BOOK',
    payload: book,
    id: book.id
  };
};

export const RemoveBook = (book) => {
  return {
    type: 'REMOVE_BOOK',
    payload: book,
    id: book.id
  };
};

export const FindBook = (name) => {
  return {
    type: 'FIND_BOOK',
    payload: name
  };
};
