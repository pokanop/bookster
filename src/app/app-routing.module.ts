import { NgModule } from '@angular/core';
import {
  RouterModule,
  Router,
  RouterEvent,
  NavigationStart,
  NavigationEnd,
} from '@angular/router';
import { routes } from '@src/app/app.routes';
import { filter } from 'rxjs/operators';

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      initialNavigation: 'enabled',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {
  //
  // Sadly Angular's built-in scrolling doesn't work properly so this is a workaround:
  // See these for issue and workarounds:
  // - https://github.com/angular/angular/issues/24547
  // - https://github.com/angular/components/issues/11552
  //
  scrollTopPositions: { [url: string]: number } = {};

  constructor(router: Router) {
    router.events
      .pipe(
        filter(
          (event: RouterEvent) =>
            event instanceof NavigationStart || event instanceof NavigationEnd
        )
      )
      .subscribe({
        next: (event: RouterEvent) => {
          const scrollContainer = document.querySelector('mat-sidenav-content');
          if (!scrollContainer) {
            return;
          }

          if (event instanceof NavigationStart) {
            this.scrollTopPositions[router.url] = scrollContainer.scrollTop;
          } else if (event instanceof NavigationEnd) {
            const newUrl = router.url;
            setTimeout(() => {
              scrollContainer.scrollTop = this.scrollTopPositions[newUrl];
            }, 0);
          }
        },
      });
  }
}
