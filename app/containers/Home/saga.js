import { takeLatest, put, call, select } from 'redux-saga/effects';

import { makeSelectLocale } from 'containers/LanguageProvider/selectors';
import { capitalize } from 'utils/strings';
import { isWebVersion } from 'utils/globalHelpers';
import { LOAD_ENTRY } from './constants';
import { entryLoaded, webVersionLimitReached } from './actions';

import * as api from './api';

const WEB_VERSION_LIMIT = 20;

export function* loadEntry(action) {
  const locale = yield select(makeSelectLocale());
  const response = yield call(api.fetchEntries);

  const localized = localize(response.items, locale);
  const alreadySeen = getAlreadySeenEntries();

  if (alreadySeen.length >= WEB_VERSION_LIMIT && isWebVersion()) {
    // Limit reached for web version and return last viewed entry
    yield put(webVersionLimitReached(lastSeen(response.items, alreadySeen)));
  } else {
    // filter out entries that have been seen
    let notSeen = localized.filter((e) => !alreadySeen.some((id) => id === e.sys.id));

    if (notSeen.length === 0) {
      notSeen = localized; // Shit. User has seen everything. RESET! ABORT MISSION!
      reset();
    }

    // pick a random entry to display
    let entry = notSeen[Math.floor(Math.random() * notSeen.length)];

    // If id was passed, fetch specific entry instead of random
    if (action.id) {
      entry = response.items.filter((e) => e.sys.id === action.id)[0];
    }

    yield put(entryLoaded(entry));
  }
}

const localize = (entries, locale) => entries.filter((e) => e.fields.language === capitalize(locale));

const getAlreadySeenEntries = () => JSON.parse(localStorage.getItem('alreadySeen')) || [];

const lastSeen = (entries, alreadySeen) => entries.filter((e) => e.sys.id === alreadySeen[alreadySeen.length - 1])[0];

const reset = () => localStorage.setItem('alreadySeen', null);

export default function* rootSaga() {
  yield [
    takeLatest(LOAD_ENTRY, loadEntry),
  ];
}
