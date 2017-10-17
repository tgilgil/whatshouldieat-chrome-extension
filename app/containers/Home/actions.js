/*
 *
 * Home actions
 *
 */

import {
  LOAD_ENTRY,
  ENTRY_LOADED,
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

