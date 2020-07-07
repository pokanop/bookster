import { Category } from './category.enum';
import { Book } from './book.model';
import { Person } from './person';

export class Author implements Person {
  public kind = 'authors';

  constructor(
    public id: string,
    public name: string,
    public bio: string,
    public imageUrl: URL,
    public books?: Book[],
    public categories?: Category[],
    public similarAuthors?: Author[]
  ) {}
}
