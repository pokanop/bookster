import { Component, OnInit, OnDestroy } from '@angular/core';
import { Author } from '@src/app/models/author.model';
import { Observable, Subscription } from 'rxjs';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { AuthorService } from '@src/app/services/author.service';
import { randomAuthor } from '@src/app/helpers/random';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.scss'],
})
export class AuthorComponent implements OnInit, OnDestroy {
  author: Author = randomAuthor();
  private subscription: Subscription;

  constructor(
    private route: ActivatedRoute,
    private authorService: AuthorService
  ) {}

  ngOnInit(): void {
    // this.subscription = this.route.paramMap
    //   .pipe(
    //     switchMap((params: ParamMap) => {
    //       return new Observable<Author>((observer) =>
    //         observer.next(this.authorService.getAuthor(params.get('id')))
    //       );
    //     })
    //   )
    //   .subscribe((author) => (this.author = author));
  }

  ngOnDestroy(): void {
    // this.subscription.unsubscribe();
  }
}
