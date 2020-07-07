import { Component, OnInit, OnDestroy } from '@angular/core';
import { User } from '@src/app/models/user.model';
import { Subscription, Observable } from 'rxjs';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { UserService } from '@src/app/services/user.service';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit, OnDestroy {
  user: User;
  private subscription: Subscription;

  constructor(
    private route: ActivatedRoute,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.subscription = this.route.paramMap
      .pipe(
        switchMap((params: ParamMap) => {
          return new Observable<User>((observer) =>
            observer.next(this.userService.getUser(params.get('id')))
          );
        })
      )
      .subscribe((user) => (this.user = user));
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
