class Entry {
  constructor(id, locale, contentType, name, description, execution, portions, imageUrl, logoUrl, link) {
    this.id = id;
    this.locale = locale;
    this.contentType = contentType;
    this.name = name;
    this.description = description;
    this.execution = execution;
    this.portions = portions;
    this.imageUrl = imageUrl;
    this.logoUrl = logoUrl;
    this.link = link;
  }
}

export default Entry;
