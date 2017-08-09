// action creator, needs to return an action: { type:... }

export function selectBook(book) {
  return {
    type: 'BOOK_SELECTED',
    payload: book
  };
}
