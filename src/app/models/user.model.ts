import { Person } from './person';

export class User implements Person {
  public name: string;
  public kind = 'user';

  constructor(
    public id: string,
    public firstName: string,
    public lastName: string,
    public bio: string,
    public imageUrl?: URL
  ) {
    this.name = `${this.firstName} ${this.lastName}`;
  }
}
