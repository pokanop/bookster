import { Collection } from './collection.model';
import { Book } from './book.model';

export class Library {
  constructor(
    public books: Book[],
    public favorites: Book[],
    public collections: Collection[]
  ) {}
}
