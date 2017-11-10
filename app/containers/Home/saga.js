import { takeLatest, put, call, select } from 'redux-saga/effects';

import { makeSelectLocale } from 'containers/LanguageProvider/selectors';
// import { isWebVersion } from 'utils/globalHelpers';
import { LOAD_ENTRY } from './constants';
import { entryLoaded, displaySurvey } from './actions';
import EntriesService from './Entries/EntriesService';

import * as api from './api';

export function* loadEntry(action) {
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

export default function* rootSaga() {
  yield [
    takeLatest(LOAD_ENTRY, loadEntry),
  ];
}
