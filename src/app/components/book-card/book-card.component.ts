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
}
