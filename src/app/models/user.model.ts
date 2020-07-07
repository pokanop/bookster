import { Person } from './person';
import { Library } from './library.model';

export class User implements Person {
  public name: string;
  public kind = 'users';

  constructor(
    public id: string,
    public firstName: string,
    public lastName: string,
    public bio: string,
    public imageUrl: URL,
    public library: Library
  ) {
    this.name = `${this.firstName} ${this.lastName}`;
  }
}
