import { Injectable } from '@angular/core';
import { Author } from '../models/author.model';
import { randomAuthors } from '../helpers/random';

@Injectable({
  providedIn: 'root',
})
export class AuthorService {
  private authors: Map<string, Author> = this.seedAuthors();

  constructor() {}

  getAuthor(id: string): Author | undefined {
    return this.authors.get(id);
  }

  setAuthor(author: Author) {
    this.authors.set(author.id, author);
  }

  getAuthors(): Author[] {
    return Array.from(this.authors.values());
  }

  private seedAuthors(): Map<string, Author> {
    let map = new Map<string, Author>();
    let authors = randomAuthors(25);
    authors.forEach((author) => {
      map.set(author.id, author);
    });
    return map;
  }
}
