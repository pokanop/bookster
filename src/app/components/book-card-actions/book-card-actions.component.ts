import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Book } from '@src/app/models/book.model';
import { MatDialog } from '@angular/material/dialog';
import { BookCardDialogComponent } from '../book-card-dialog/book-card-dialog.component';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-book-card-actions',
  templateUrl: './book-card-actions.component.html',
  styleUrls: ['./book-card-actions.component.scss'],
})
export class BookCardActionsComponent implements OnInit {
  @Input() book: Book;
  @Input() actions: string[];
  @Output() rippleDisabled = new EventEmitter<boolean>();

  constructor(private dialog: MatDialog, private snackBar: MatSnackBar) {}

  ngOnInit(): void {}

  favoriteIcon(): string {
    return this.book.favorite ? 'favorite' : 'favorite_border';
  }

  libraryIcon(): string {
    return this.book.added ? 'done' : 'add';
  }

  toggleFavorite() {
    // TODO: Persist this change
    this.book.favorite = !this.book.favorite;
    this.showSnackBar('favorites', this.book.favorite);
  }

  toggleLibrary() {
    // TODO: Update in library service
    this.book.added = !this.book.added;
    this.showSnackBar('library', this.book.added);
  }

  download() {}

  share() {}

  closeDialog() {
    this.dialog.closeAll();
  }

  showAction(action: string): boolean {
    return this.actions.includes(action);
  }

  disableRipple() {
    this.rippleDisabled.emit(true);
  }

  enableRipple() {
    this.rippleDisabled.emit(false);
  }

  private showSnackBar(collection: string, added: boolean) {
    this.snackBar.open(
      `${added ? 'Added' : 'Removed'} book ${
        added ? 'to' : 'from'
      } ${collection}`,
      null,
      {
        duration: 2000,
      }
    );
  }
}
