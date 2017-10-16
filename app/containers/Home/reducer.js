/*
 *
 * Home reducer
 *
 */

import { fromJS } from 'immutable';
import {
  ENTRIES_LOADED,
} from './constants';

const initialState = fromJS({
  entries: null,
  loading: true,
});

function homeReducer(state = initialState, action) {
  switch (action.type) {
    case ENTRIES_LOADED:
      return state.set('entries', action.entries)
                  .set('loading', false);

    default:
      return state;
  }
}

export default homeReducer;
