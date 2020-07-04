import { Component, OnInit, Input } from '@angular/core';
import { Book } from '@src/app/models/book.model';

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.scss'],
})
export class BookCardComponent implements OnInit {
  @Input() book: Book;
  extended = false;

  constructor() {}

  ngOnInit(): void {}

  favoriteIcon(): string {
    return this.book.favorite ? 'favorite' : 'favorite_border';
  }

  addIcon(): string {
    return this.book.added ? 'done' : 'add';
  }

  toggleFavorite() {
    // TODO: Persist this change
    this.book.favorite = !this.book.favorite;
  }

  addToLibrary() {
    // TODO: Update in library service
    this.book.added = !this.book.added;
  }
}
