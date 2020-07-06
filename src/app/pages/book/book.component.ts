import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { BookService } from '@src/app/services/book.service';
import { Observable, Subscription } from 'rxjs';
import { Book } from '@src/app/models/book.model';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss'],
})
export class BookComponent implements OnInit, OnDestroy {
  book: Book;
  private subscription: Subscription;

  constructor(
    private route: ActivatedRoute,
    private bookService: BookService
  ) {}

  ngOnInit(): void {
    this.subscription = this.route.paramMap
      .pipe(
        switchMap((params: ParamMap) => {
          return new Observable<Book>((observer) =>
            observer.next(this.bookService.getBook(params.get('id')))
          );
        })
      )
      .subscribe((book) => (this.book = book));
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  toggleFavorite() {
    this.book.favorite = !this.book.favorite;
  }

  toggleLibrary() {
    this.book.added = !this.book.added;
  }

  favoriteText(): string {
    return this.book.favorite ? 'Remove from favorites' : 'Add to favorites';
  }

  libraryText(): string {
    return this.book.added ? 'Remove from library' : 'Add to library';
  }

  favoriteColor(): string {
    return this.book.favorite ? 'accent' : '';
  }

  libraryColor(): string {
    return this.book.added ? 'accent' : '';
  }

  favoriteIcon(): string {
    return this.book.favorite ? 'favorite' : 'favorite_border';
  }

  libraryIcon(): string {
    return this.book.added ? 'done' : 'add';
  }
}
