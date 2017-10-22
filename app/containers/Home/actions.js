/*
 *
 * Home actions
 *
 */

import {
  LOAD_ENTRY,
  ENTRY_LOADED,
  WEB_VERSION_LIMIT_REACHED,
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
