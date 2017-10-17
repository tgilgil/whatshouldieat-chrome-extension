/*
 *
 * Home reducer
 *
 */

import { fromJS } from 'immutable';

import {
  ENTRY_LOADED,
} from './constants';

const initialState = fromJS({
  entry: null,
});

function homeReducer(state = initialState, action) {
  switch (action.type) {
    case ENTRY_LOADED: {
      const alreadySeen = JSON.parse(localStorage.getItem('alreadySeen')) || [];
      alreadySeen.push(action.entry.sys.id);
      localStorage.setItem('alreadySeen', JSON.stringify(alreadySeen));

      return state.set('entry', action.entry);
    }

    default:
      return state;
  }
}

export default homeReducer;
