/*
 *
 * LanguageProvider reducer
 *
 */

import { fromJS } from 'immutable';

import { REHYDRATE } from 'redux-persist/constants';

import {
  CHANGE_LOCALE,
} from './constants';
import {
  DEFAULT_LOCALE,
} from '../App/constants'; // eslint-disable-line

const initialState = fromJS({
  locale: DEFAULT_LOCALE,
});

function languageProviderReducer(state = initialState, action) {
  switch (action.type) {
    case REHYDRATE:
      return state
        .set('locale', localStorage.getItem('lang') || 'en');

    case CHANGE_LOCALE:
      localStorage.setItem('lang', action.locale);
      return state
        .set('locale', action.locale);

    default:
      return state;
  }
}

export default languageProviderReducer;
