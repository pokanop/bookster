import { Component, OnInit, Input } from '@angular/core';
import { Book } from '@src/app/models/book.model';
import { MatDialog } from '@angular/material/dialog';
import { BookCardDialogComponent } from '../book-card-dialog/book-card-dialog.component';

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.scss'],
})
export class BookCardComponent implements OnInit {
  @Input() class: string;
  @Input() book: Book;
  @Input() extended: boolean;
  @Input() zoomDisabled: boolean = false;
  rippleDisabled: boolean;

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}

  topActions(): string[] {
    return ['read', 'favorite'];
  }

  bottomActions(): string[] {
    if (this.extended) {
      return ['add', 'book', 'author', 'download', 'share'];
    } else {
      return ['favorite', 'download', 'share'];
    }
  }

  openDialog() {
    if (this.zoomDisabled || this.rippleDisabled) {
      return;
    }

    this.dialog.open(BookCardDialogComponent, {
      data: {
        book: this.book,
      },
      autoFocus: false,
      height: '640px',
      width: '520px',
    });
  }

  onRippleDisabled(disabled: boolean) {
    this.rippleDisabled = disabled;
  }
}
