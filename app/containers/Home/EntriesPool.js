import { capitalize } from 'utils/strings';

class EntriesPool {
  constructor(entries, locale) {
    this.entries = entries;
    this.locale = locale;

    this.alreadySeen = JSON.parse(localStorage.getItem('alreadySeen')) || [];
  }

  get all() {
    return this.entries;
  }

  get localized() {
    return this.entries.filter((e) => e.fields.language === capitalize(this.locale));
  }

  get isLimitReached() {
    return this.alreadySeen.length >= 20;
  }

  get lastSeen() {
    const alreadySeen = this.alreadySeen;
    return this.entries.filter((e) => e.sys.id === alreadySeen[alreadySeen.length - 1])[0];
  }

  notSeen() {
    return this.localized.filter((e) => !this.alreadySeen.some((id) => id === e.sys.id));
  }

  get(id) {
    return this.entries.filter((e) => e.sys.id === id)[0];
  }

  reset() {
    localStorage.setItem('alreadySeen', null);
  }

  random() {
    const notSeen = this.notSeen();
    return notSeen[Math.floor(Math.random() * notSeen.length)];
  }
}

export default EntriesPool;
