import { capitalize } from 'utils/strings';

class EntriesPool {
  constructor(entries, locale) {
    this.entries = entries;
    this.locale = locale;
  }

  all() {
    return this.entries;
  }

  localized() {
    return this.entries.filter((e) => e.fields.language === capitalize(this.locale));
  }
}

export default EntriesPool;
