import { Book } from '../models/book.model';
import { Author } from '../models/author.model';
import { Category } from '../models/category.enum';
import { Publisher } from '../models/publisher.model';
import { Language } from '../models/language.enum';
import { count } from 'console';

export function randomString(length: number) {
  var result = '';
  var characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

export function randomBook(): Book {
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

export function randomBooks(count: number): Book[] {
  let books: Book[] = [];
  for (let i = 0; i < count; i++) {
    books.push(randomBook());
  }
  return books;
}

export function randomAuthor(): Author {
  return new Author(randomString(16), randomString(10), randomString(20));
}

export function randomAuthors(count: number): Author[] {
  let authors: Author[] = [];
  for (let i = 0; i < count; i++) {
    authors.push(randomAuthor());
  }
  return authors;
}
