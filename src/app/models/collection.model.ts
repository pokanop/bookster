import { Book } from './book.model';

export class Collection {
  public imageUrl: URL;

  constructor(public name: string, public books: Book[]) {
    if (this.books.length > 0) {
      this.imageUrl = this.books[0].imageUrl;
    } else {
      this.imageUrl = new URL(
        'https://www.clipartmax.com/png/small/19-193696_book-collection-google-search-book-clip-art.png'
      );
    }
  }
}
