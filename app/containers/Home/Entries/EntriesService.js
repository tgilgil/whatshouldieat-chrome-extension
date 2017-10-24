import moment from 'moment';
import { capitalize } from 'utils/strings';

import Entry from './Entry';

class EntriesService {
  constructor(contentfulEntries, cookitEntries, locale) {
    this.contentfulEntries = contentfulEntries;
    this.cookitEntries = cookitEntries;
    this.locale = locale;

    this.alreadySeen = JSON.parse(localStorage.getItem('alreadySeen')) || [];

    this.mapEntries();
  }

  mapEntries() {
    const mappedContentfulEntries = this.contentfulEntries.map((entry) => {
      if (entry.sys.contentType.sys.id === 'recipe') {
        return new Entry(
          entry.sys.id,
          entry.fields.language,
          entry.sys.contentType.sys.id,
          entry.fields.name,
          entry.fields.description,
          entry.fields.preparationTime,
          entry.fields.portions,
          entry.fields.image.fields.file.url,
          entry.fields.logo.fields.file.url,
          entry.fields.blog);
      }
      return new Entry(
        entry.sys.id,
        entry.fields.language,
        entry.sys.contentType.sys.id,
        entry.fields.name,
        entry.fields.description,
        null,
        null,
        entry.fields.image.fields.file.url,
        null,
        null);
    });

    // map default language since cookit does no give any.
    // const mappedCookItEntries = this.cookitEntries.map((entry))

    this.entries = mappedContentfulEntries;
  }

  get all() {
    return this.entries;
  }

  get localized() {
    return this.entries.filter((e) => e.locale === capitalize(this.locale));
  }

  get isLimitReached() {
    return this.alreadySeen.length >= 20;
  }

  get lastSeen() {
    const alreadySeen = this.alreadySeen;
    return this.entries.filter((e) => e.id === alreadySeen[alreadySeen.length - 1])[0];
  }

  notSeen() {
    return this.localized.filter((e) => !this.alreadySeen.some((id) => id === e.id));
  }

  get(id) {
    return this.entries.filter((e) => e.id === id)[0];
  }

  shouldDisplayCookItPromo() {
    if (this.alreadySeen.length >= 3) {
      const lastTimePromoHasBeenDisplayed = moment(localStorage.getItem('lastTimePromoHasBeenDisplayed')) || moment().subtract(2, 'weeks');
      return lastTimePromoHasBeenDisplayed.diff(moment(), 'weeks') >= 1;
    }

    return false;
  }

  getPromo() {
    const promo = this.cookitEntries[0];
    // TODO. Ask CookIt to expose link to recipe.
    // TODO Ask CookIt to give us their logo to host ourselves on our CDN.
    return new Entry(promo.id, 'fr', 'recipe', promo.title, promo.description, promo.duration, 3, promo.image.data.secure_url, 'https://pbs.twimg.com/profile_images/717141075157204992/mIWmqTWw.jpg', 'https://www.chefcookit.com/recipes/');
  }

  reset() {
    localStorage.setItem('alreadySeen', null);
  }

  random() {
    let notSeen = this.notSeen();

    // if user has seen everything, reset. ABORT MISSION!
    if (notSeen.length === 0) {
      this.reset();
      notSeen = this.localized;
    }

    return notSeen[Math.floor(Math.random() * notSeen.length)];
  }
}

export default EntriesService;
