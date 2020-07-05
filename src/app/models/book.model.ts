import { Author } from './author.model';
import { Category } from './category.enum';
import { Publisher } from './publisher.model';
import { Language } from './language.enum';
import { Review } from './review.model';

export class Book {
  constructor(
    public id: string,
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
}
