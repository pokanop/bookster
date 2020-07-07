import { Book } from '../models/book.model';
import { Author } from '../models/author.model';
import { Category } from '../models/category.enum';
import { Publisher } from '../models/publisher.model';
import { Language } from '../models/language.enum';
import { User } from '../models/user.model';
import { Library } from '../models/library.model';
import { Collection } from '../models/collection.model';

var randomCounter = 0;

export function randomString(length: number, includeSpace: boolean = true) {
  var result = '';
  var characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  if (includeSpace) {
    characters += ' ';
  }
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

export function randomBook(
  author: Author = randomAuthor(),
  similar: boolean = true
): Book {
  let book = new Book(
    randomString(16, false),
    randomString(10),
    randomString(24),
    author,
    randomString(500),
    Math.ceil(Math.random() * 500),
    Math.ceil(Math.random() * 100000000),
    new URL(`https://picsum.photos/200?${randomCounter++}`),
    new URL(
      'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf'
    ),
    false,
    false,
    [Category.Horror],
    new Publisher(randomString(10)),
    new Date(),
    Language.English,
    [],
    [],
    [
      randomUser(new Library([], [], [])),
      randomUser(new Library([], [], [])),
      randomUser(new Library([], [], [])),
    ]
  );

  if (similar) {
    book.similarBooks = [
      randomBook(author, false),
      randomBook(author, false),
      randomBook(author, false),
    ];
  }

  return book;
}

export function randomBooks(count: number): Book[] {
  let books: Book[] = [];
  for (let i = 0; i < count; i++) {
    books.push(randomBook());
  }
  return books;
}

export function randomAuthor(similar: boolean = true): Author {
  let author = new Author(
    randomString(16, false),
    randomString(10),
    randomString(500),
    new URL('https://www.w3schools.com/howto/img_avatar.png'),
    [],
    [Category.ActionAdventure, Category.Crime, Category.Fantasy]
  );
  author.books = [randomBook(author), randomBook(author), randomBook(author)];
  if (similar) {
    author.similarAuthors = [
      randomAuthor(false),
      randomAuthor(false),
      randomAuthor(false),
      randomAuthor(false),
    ];
  }
  return author;
}

export function randomAuthors(count: number): Author[] {
  let authors: Author[] = [];
  for (let i = 0; i < count; i++) {
    authors.push(randomAuthor());
  }
  return authors;
}

export function randomUser(library: Library = randomLibrary()): User {
  return new User(
    randomString(16, false),
    randomString(10),
    randomString(10),
    randomString(250),
    new URL('https://www.w3schools.com/howto/img_avatar.png'),
    library
  );
}

export function randomUsers(count: number): User[] {
  let users: User[] = [];
  for (let i = 0; i < count; i++) {
    users.push(randomUser());
  }
  return users;
}

export function randomLibrary(): Library {
  let books = randomBooks(50);
  return new Library(books, randomElements(books, 10), randomCollections(5));
}

export function randomCollection(): Collection {
  return new Collection(randomString(10), randomBooks(10));
}

export function randomCollections(count: number): Collection[] {
  let collections: Collection[] = [];
  for (let i = 0; i < count; i++) {
    collections.push(randomCollection());
  }
  return collections;
}

export function randomElement(items: any[]): any {
  return items[Math.floor(Math.random() * items.length)];
}

export function randomElements(items: any[], count: number): any[] {
  let out: any[] = [];
  for (let i = 0; i < count; i++) {
    let index = Math.floor(Math.random() * items.length);
    out.push(items[index]);
  }
  return out;
}
