/* global navigator */
/* global localStorage */

import { takeLatest, put, call } from 'redux-saga/effects';
import { showLoading } from 'react-redux-loading-bar';

import { LOAD_ENTRIES } from './constants';
import { entriesLoaded } from './actions';

import * as api from './api';

export function* loadEntries() {
  yield put(showLoading());
  const response = yield call(api.fetchEntries);
  yield put(entriesLoaded(response.items));
}

export default function* rootSaga() {
  yield [
    takeLatest(LOAD_ENTRIES, loadEntries),
  ];
}
