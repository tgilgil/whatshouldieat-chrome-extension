import { takeLatest, put, call, select } from 'redux-saga/effects';
// import { delay } from 'redux-saga';

import { makeSelectLocale } from 'containers/LanguageProvider/selectors';
import { LOAD_ENTRY, START_REFRESH } from './constants';
import { entryLoaded, displaySurvey, stopRefresh, refreshStarted, loadEntry } from './actions';
import EntriesService from './Entries/EntriesService';

import * as api from './api';

export function* loadEntrySaga(action) {
  const locale = yield select(makeSelectLocale());
  const response = yield call(api.fetchEntries);

  const entriesService = new EntriesService(response.items, null, locale);

  if (action.id) {
    yield put(entryLoaded(entriesService.get(action.id)));
  } else {
    yield put(entryLoaded(entriesService.random()));
    if (entriesService.verifyIfSurveyShouldBeShown()) yield put(displaySurvey());
  }
}

export function* startRefreshSaga() {
  yield put(refreshStarted());

  yield put(loadEntry());
  yield call(delay, 1000);

  yield put(stopRefresh());
}

function delay(ms) {
  return new Promise((resolve) => setTimeout(() => resolve(true), ms));
}

export default function* rootSaga() {
  yield [
    takeLatest(LOAD_ENTRY, loadEntrySaga),
    takeLatest(START_REFRESH, startRefreshSaga),
  ];
}
