/*
 *
 * Home actions
 *
 */

import {
  LOAD_ENTRY,
  ENTRY_LOADED,
  WEB_VERSION_LIMIT_REACHED,
  COOKIT_PROMO_HAS_BEEN_DISPLAYED,
  DISPLAY_SURVEY,
  CANCEL_SURVEY,
  GO_TO_NEXT_SURVEY_STEP,
  START_REFRESH,
  STOP_REFRESH,
  REFRESH_STARTED,
} from './constants';

export function loadEntry(id) {
  return {
    type: LOAD_ENTRY,
    id,
  };
}

export function entryLoaded(entry) {
  return {
    type: ENTRY_LOADED,
    entry,
  };
}

export function webVersionLimitReached(lastEntry) {
  return {
    type: WEB_VERSION_LIMIT_REACHED,
    lastEntry,
  };
}

export function cookItPromoHasBeenDisplayed() {
  return {
    type: COOKIT_PROMO_HAS_BEEN_DISPLAYED,
  };
}

export function displaySurvey() {
  return {
    type: DISPLAY_SURVEY,
  };
}

export function cancelSurvey() {
  return {
    type: CANCEL_SURVEY,
  };
}

export function goToSurveyStep(step) {
  return {
    type: GO_TO_NEXT_SURVEY_STEP,
    step,
  };
}

export function startRefresh() {
  return {
    type: START_REFRESH,
  };
}

export function refreshStarted() {
  return {
    type: REFRESH_STARTED,
  };
}

export function stopRefresh() {
  return {
    type: STOP_REFRESH,
  };
}
