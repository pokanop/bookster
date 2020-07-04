import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Book } from '@src/app/models/book.model';

export interface DialogData {
  book: Book;
}

@Component({
  selector: 'app-book-card-dialog',
  templateUrl: './book-card-dialog.component.html',
  styleUrls: ['./book-card-dialog.component.scss'],
})
export class BookCardDialogComponent implements OnInit {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}

  ngOnInit(): void {}
}
