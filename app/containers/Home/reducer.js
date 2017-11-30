/*
 *
 * Home reducer
 *
 */

import { fromJS } from 'immutable';
import moment from 'moment';

import { resetAnimation } from 'utils/animations';

import {
  ENTRY_LOADED,
  WEB_VERSION_LIMIT_REACHED,
  COOKIT_PROMO_HAS_BEEN_DISPLAYED,
  DISPLAY_SURVEY,
  CANCEL_SURVEY,
  GO_TO_NEXT_SURVEY_STEP,
  STOP_REFRESH,
  REFRESH_STARTED,
} from './constants';

const initialState = fromJS({
  entry: null,
  limitReached: false,
  showSurvey: false,
  surveyStep: 1,
  refreshLoading: false,
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

    case DISPLAY_SURVEY: {
      return state.set('showSurvey', true);
    }

    case CANCEL_SURVEY: {
      localStorage.setItem('surveyShown_1', true);
      return state.set('showSurvey', false);
    }

    case GO_TO_NEXT_SURVEY_STEP: {
      return state.set('surveyStep', action.step);
    }

    case REFRESH_STARTED: {
      resetAnimation();
      return state.set('refreshLoading', true);
    }

    case STOP_REFRESH: {
      return state.set('refreshLoading', false);
    }

    default:
      return state;
  }
}

export default homeReducer;
