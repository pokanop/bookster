import { Injectable } from '@angular/core';
import { Book } from '../models/book.model';
import { randomBooks, randomElements } from '../helpers/random';
import { AuthorService } from './author.service';
import { Category } from '../models/category.enum';

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
    return randomElements(Array.from(this.books.values()), count);
  }

  private seedBooks(): Map<string, Book> {
    let map = new Map<string, Book>();
    let books = randomBooks(1000);
    books.forEach((book) => {
      let author = this.authorService.getRandomAuthor();
      author.books = [];
      author.books.push(book);
      author.books = author.books.concat(randomElements(books, 5));
      author.categories = [];
      author.categories = author.categories.concat([
        Category.ActionAdventure,
        Category.Crime,
        Category.Fantasy,
      ]);
      book.author.id = author.id;
      map.set(book.id, book);
    });
    return map;
  }
}
