import { Component, OnInit, Input } from '@angular/core';
import { Book } from '../../models/book.model';

@Component({
  selector: 'app-book-card-list',
  templateUrl: './book-card-list.component.html',
  styleUrls: ['./book-card-list.component.scss'],
})
export class BookCardListComponent implements OnInit {
  @Input() books: Book[];

  constructor() {}

  ngOnInit(): void {}
}
