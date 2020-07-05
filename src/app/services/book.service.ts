import { Injectable } from '@angular/core';
import { Book } from '../models/book.model';
import { Author } from '../models/author.model';
import { Category } from '../models/category.enum';
import { Publisher } from '../models/publisher.model';
import { Language } from '../models/language.enum';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  private books: Map<string, Book> = this.seedBooks();

  constructor() {}

  getBook(id: string): Book | undefined {
    return this.books.get(id);
  }

  getRandomBooks(count: number): Book[] {
    let books: Book[] = [];
    for (let i = 0; i < count; i++) {
      let values = Array.from(this.books.values());
      console.log(values);
      let index = Math.floor(Math.random() * values.length);
      books.push(values[index]);
    }
    return books;
  }

  private randomBook(): Book {
    let randomString = (length: number) => {
      var result = '';
      var characters =
        'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      var charactersLength = characters.length;
      for (var i = 0; i < length; i++) {
        result += characters.charAt(
          Math.floor(Math.random() * charactersLength)
        );
      }
      return result;
    };

    return new Book(
      randomString(16),
      randomString(10),
      new Author(randomString(16), randomString(10), randomString(20)),
      randomString(40),
      new URL('https://material.angular.io/assets/img/examples/shiba2.jpg'),
      new URL(
        'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf'
      ),
      false,
      false,
      [Category.Horror],
      new Publisher(randomString(10)),
      new Date(),
      Language.English,
      []
    );
  }

  private randomBooks(count: number): Book[] {
    let books: Book[] = [];
    for (let i = 0; i < count; i++) {
      books.push(this.randomBook());
    }
    return books;
  }

  private seedBooks(): Map<string, Book> {
    let map = new Map<string, Book>();
    let books = this.randomBooks(1000);
    books.forEach((book) => {
      map.set(book.id, book);
    });
    return map;
  }
}
