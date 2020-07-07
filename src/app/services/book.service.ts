import { Injectable } from '@angular/core';
import { Book } from '../models/book.model';
import { randomBooks, randomElements, randomElement } from '../helpers/random';
import { AuthorService } from './author.service';
import { Category } from '../models/category.enum';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  private books: Map<string, Book> = this.seedBooks();

  constructor(
    private authorService: AuthorService,
    private userService: UserService
  ) {}

  getBook(id: string): Book | undefined {
    return this.books.get(id);
  }

  getRandomBooks(count: number): Book[] {
    return randomElements(Array.from(this.books.values()), count);
  }

  private seedBooks(): Map<string, Book> {
    let map = new Map<string, Book>();
    let books = randomBooks(100);
    books.forEach((book) => {
      let author = randomElement(this.authorService.getAuthors());
      author.books = [];
      author.books.push(book);
      author.books = author.books.concat(randomElements(books, 5));
      author.categories = [];
      author.categories = author.categories.concat([
        Category.ActionAdventure,
        Category.Crime,
        Category.Fantasy,
      ]);
      author.similarAuthors = randomElements(
        this.authorService.getAuthors(),
        4
      );
      book.author.id = author.id;
      book.recommendedBy = randomElements(this.userService.getUsers(), 3);
      map.set(book.id, book);
    });
    return map;
  }
}
