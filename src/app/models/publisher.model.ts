import { Book } from './book.model';
import { Category } from './category.enum';

export class Publisher {
  constructor(
    public name: string,
    public books?: Book[],
    public categories?: Category[]
  ) {}
}
