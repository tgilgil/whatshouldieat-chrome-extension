/*
 *
 * Home reducer
 *
 */

import { fromJS } from 'immutable';
import moment from 'moment';

import {
  ENTRY_LOADED,
  WEB_VERSION_LIMIT_REACHED,
  COOKIT_PROMO_HAS_BEEN_DISPLAYED,
} from './constants';

const initialState = fromJS({
  entry: null,
  limitReached: false,
});

function homeReducer(state = initialState, action) {
  switch (action.type) {
    case ENTRY_LOADED: {
      const alreadySeen = JSON.parse(localStorage.getItem('alreadySeen')) || [];
      alreadySeen.push(action.entry.id);
      localStorage.setItem('alreadySeen', JSON.stringify(alreadySeen));
      return state.set('entry', action.entry);
    }

    case WEB_VERSION_LIMIT_REACHED: {
      return state.set('limitReached', true)
                  .set('entry', action.lastEntry);
    }

    case COOKIT_PROMO_HAS_BEEN_DISPLAYED: {
      localStorage.setItem('lastTimePromoHasBeenDisplayed', moment());
      return state;
    }

    default:
      return state;
  }
}

export default homeReducer;
