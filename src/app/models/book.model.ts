export class Book {
  constructor(
    public title: string,
    public author: string,
    public description: string,
    public image: string,
    public favorite: boolean,
    public added: boolean
  ) {}

  public static random(): Book {
    return new Book(
      'title',
      'author',
      'description',
      'https://material.angular.io/assets/img/examples/shiba2.jpg',
      false,
      false
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
