import { Component, OnInit, Input } from '@angular/core';
import { Book } from '@src/app/models/book.model';

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.scss'],
})
export class BookCardComponent implements OnInit {
  @Input() book: Book;
  @Input() extended: boolean;

  constructor() {}

  ngOnInit(): void {}

  topActions(): string[] {
    return ['read', 'favorite'];
  }

  bottomActions(): string[] {
    if (this.extended) {
      return ['add', 'book', 'download', 'share'];
    } else {
      return ['zoom', 'download', 'share'];
    }
  }
}
