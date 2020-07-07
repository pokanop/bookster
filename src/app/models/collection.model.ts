import { Book } from './book.model';

export class Collection {
  constructor(public name: string, public books: Book[]) {}
}
