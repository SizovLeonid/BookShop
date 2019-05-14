import { cartSagas } from 'pages/cart/cartSagas';
import { genreSagas } from 'pages/booksGenre/genreSagas';
import { homeSagas } from 'pages/home/homeSagas';
import { takeLatest } from 'redux-saga/effects';

function* takeLatestGenerator(sagas) {
  for (const [actionType, saga] of Object.entries(sagas)) {
    yield takeLatest(actionType, saga);
  }
}

export default function* () {
  yield* takeLatestGenerator(homeSagas);
  yield* takeLatestGenerator(genreSagas);
  yield* takeLatestGenerator(cartSagas);
}
