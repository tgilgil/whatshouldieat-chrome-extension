/*
 *
 * Home actions
 *
 */

import {
  LOAD_ENTRIES,
  ENTRIES_LOADED,
} from './constants';

export function loadEntries() {
  return {
    type: LOAD_ENTRIES,
  };
}

export function entriesLoaded(entries) {
  return {
    type: ENTRIES_LOADED,
    entries,
  };
}

