import { createClient } from 'contentful';

const SPACE_ID = 'lz8rxz1m2o5d';
const ACCESS_TOKEN = 'a624220986fe3b346440c1558ba555f541701cf9181d39363ef686579153a343';

const client = createClient({
  space: SPACE_ID,
  accessToken: ACCESS_TOKEN,
});

export function fetchEntries() {
  return client.getEntries();
}
