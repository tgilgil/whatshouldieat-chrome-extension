import { takeLatest, put, call, select } from 'redux-saga/effects';

import { makeSelectLocale } from 'containers/LanguageProvider/selectors';
import { capitalize } from 'utils/strings';
import { LOAD_ENTRY } from './constants';
import { entryLoaded } from './actions';

import * as api from './api';

export function* loadEntry(action) {
  const locale = yield select(makeSelectLocale());
  const response = yield call(api.fetchEntries);

  // fetch entries of current locale
  const localized = response.items.filter((e) => e.fields.language === capitalize(locale));

  // entries already seen by user so we don't show the same entry twice
  const alreadySeen = JSON.parse(localStorage.getItem('alreadySeen')) || [];

  // filter out entries that have been seen
  let notSeen = localized.filter((e) => !alreadySeen.some((id) => id === e.sys.id));

  if (notSeen.length === 0) {
    notSeen = localized; // Shit. User has seen everything. RESET! ABORT MISSION!
    localStorage.setItem('alreadySeen', null);
  }

  // pick a random entry to display
  let entry = notSeen[Math.floor(Math.random() * notSeen.length)];

  // If id was passed, fetch specific entry instead of random
  if (action.id) {
    entry = response.items.filter((e) => e.sys.id === action.id)[0];
  }

  yield put(entryLoaded(entry));
}

export default function* rootSaga() {
  yield [
    takeLatest(LOAD_ENTRY, loadEntry),
  ];
}

//    notYetDisplayed = localized.filter((e) => !home.entriesAlreadyDisplayed.some((ead) => ead.sys.id === e.sys.id));

