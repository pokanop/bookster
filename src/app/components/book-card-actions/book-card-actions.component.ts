import { Component, OnInit, Input } from '@angular/core';
import { Book } from '@src/app/models/book.model';
import { MatDialog } from '@angular/material/dialog';
import { BookCardDialogComponent } from '../book-card-dialog/book-card-dialog.component';

@Component({
  selector: 'app-book-card-actions',
  templateUrl: './book-card-actions.component.html',
  styleUrls: ['./book-card-actions.component.scss'],
})
export class BookCardActionsComponent implements OnInit {
  @Input() book: Book;
  @Input() actions: string[];

  constructor(public dialog: MatDialog) {}

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

  openDialog() {
    this.dialog.open(BookCardDialogComponent, {
      data: {
        book: this.book,
      },
    });
  }

  closeDialog() {
    this.dialog.closeAll();
  }

  showAction(action: string): boolean {
    return this.actions.includes(action);
  }
}
