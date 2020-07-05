export class User {
  constructor(
    public firstName: string,
    public lastName: string,
    public imageUrl?: URL
  ) {}

  get name(): string {
    return `${this.firstName} ${this.lastName}`;
  }
}
