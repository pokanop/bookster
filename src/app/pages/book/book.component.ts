import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { BookService } from '@src/app/services/book.service';
import { Observable, Subscription } from 'rxjs';
import { Book } from '@src/app/models/book.model';
import { randomBook } from '@src/app/helpers/random';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss'],
})
export class BookComponent implements OnInit, OnDestroy {
  book: Book = randomBook();
  private subscription: Subscription;

  constructor(
    private route: ActivatedRoute,
    private bookService: BookService
  ) {}

  ngOnInit(): void {
    // this.subscription = this.route.paramMap
    //   .pipe(
    //     switchMap((params: ParamMap) => {
    //       return new Observable<Book>((observer) =>
    //         observer.next(this.bookService.getBook(params.get('id')))
    //       );
    //     })
    //   )
    //   .subscribe((book) => (this.book = book));
  }

  ngOnDestroy(): void {
    // this.subscription.unsubscribe();
  }
}
