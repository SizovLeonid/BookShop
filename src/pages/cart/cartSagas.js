import { cartActions as actions } from './cartActions';
import { call, put } from 'redux-saga/effects';
import * as api from 'api';

export const cartSagas = {
  * GET_BOOKS() {
    try {
      const response = yield call(api.getBooks);

      yield put(actions.getBooksSuccess({ books: response.data }));
    } catch (e) {
      yield put(actions.getBooksFail({ e }));
    }
  },
};
