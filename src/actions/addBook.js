export const AddBook = (book) => {
  return {
    type: 'ADD_BOOK',
    payload: book
  };
};

export const RemoveBook = (book) => {
  return {
    type: 'REMOVE_BOOK',
    payload: book,
    bookId: book.id
  };
};
