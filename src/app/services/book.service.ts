import { Injectable } from '@angular/core';
import { Book } from '../models/book.model';
import { randomBooks } from '../helpers/random';
import { AuthorService } from './author.service';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  private books: Map<string, Book> = this.seedBooks();

  constructor(private authorService: AuthorService) {}

  getBook(id: string): Book | undefined {
    return this.books.get(id);
  }

  getRandomBooks(count: number): Book[] {
    let books: Book[] = [];
    for (let i = 0; i < count; i++) {
      let values = Array.from(this.books.values());
      let index = Math.floor(Math.random() * values.length);
      books.push(values[index]);
    }
    return books;
  }

  private seedBooks(): Map<string, Book> {
    let map = new Map<string, Book>();
    let books = randomBooks(1000);
    books.forEach((book) => {
      book.author.id = this.authorService.getRandomAuthor().id;
      map.set(book.id, book);
    });
    return map;
  }
}
