import { takeLatest, put, call, select } from 'redux-saga/effects';

import { makeSelectLocale } from 'containers/LanguageProvider/selectors';
import { isWebVersion } from 'utils/globalHelpers';
import { LOAD_ENTRY } from './constants';
import { entryLoaded, webVersionLimitReached } from './actions';
import EntriesPool from './EntriesPool';

import * as api from './api';

export function* loadEntry(action) {
  const locale = yield select(makeSelectLocale());
  const response = yield call(api.fetchEntries);

  const pool = new EntriesPool(response.items, locale);

  const localized = pool.localized;

  if (pool.isLimitReached && isWebVersion()) {
    yield put(webVersionLimitReached(pool.lastSeen));
  } else {
    let notSeen = pool.notSeen();

    if (notSeen.length === 0) {
      notSeen = localized; // Shit. User has seen everything. RESET! ABORT MISSION!
      pool.reset();
    }

    if (action.id) {
      yield put(entryLoaded(pool.get(action.id)));
    } else {
      yield put(entryLoaded(pool.random()));
    }
  }
}

export default function* rootSaga() {
  yield [
    takeLatest(LOAD_ENTRY, loadEntry),
  ];
}
