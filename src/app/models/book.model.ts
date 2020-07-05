import { Author } from './author.model';
import { Category } from './category.enum';
import { Publisher } from './publisher.model';
import { Language } from './language.enum';
import { Review } from './review.model';

export class Book {
  constructor(
    public title: string,
    public author: Author,
    public summary: string,
    public imageUrl: URL,
    public downloadUrl: URL,
    public favorite: boolean,
    public added: boolean,
    public categories: Category[],
    public publisher: Publisher,
    public releaseDate: Date,
    public language: Language,
    public reviews: Review[],
    public similarBooks?: Book[]
  ) {}

  public static random(): Book {
    return new Book(
      'title',
      new Author('author', 'bio'),
      'summary',
      new URL('https://material.angular.io/assets/img/examples/shiba2.jpg'),
      new URL(
        'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf'
      ),
      false,
      false,
      [Category.Horror],
      new Publisher('publisher'),
      new Date(),
      Language.English,
      []
    );
  }

  public static generate(count: number): Book[] {
    let books: Book[] = [];
    for (let i = 0; i < count; i++) {
      books.push(Book.random());
    }
    return books;
  }
}
