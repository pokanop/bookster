import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatMenuModule } from '@angular/material/menu';
import { MatCardModule } from '@angular/material/card';
import { MatRippleModule } from '@angular/material/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatListModule } from '@angular/material/list';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatChipsModule } from '@angular/material/chips';
import { MatTabsModule } from '@angular/material/tabs';
import { NgxFilesizeModule } from 'ngx-filesize';

import { AppRoutingModule } from '@src/app/app-routing.module';
import { AppComponent } from '@src/app/app.component';
import { HomeComponent } from '@src/app/pages/home/home.component';
import { LibraryComponent } from '@src/app/pages/library/library.component';
import { BooksComponent } from '@src/app/pages/books/books.component';
import { FriendsComponent } from '@src/app/pages/friends/friends.component';
import { ProfileComponent } from '@src/app/pages/profile/profile.component';
import { BookCardListComponent } from '@src/app/components/book-card-list/book-card-list.component';
import { BookCardComponent } from '@src/app/components/book-card/book-card.component';
import { BookCardActionsComponent } from '@src/app/components/book-card-actions/book-card-actions.component';
import { BookCardDialogComponent } from '@src/app/components/book-card-dialog/book-card-dialog.component';
import { BookComponent } from '@src/app/pages/book/book.component';
import { AuthorsComponent } from '@src/app/pages/authors/authors.component';
import { AuthorComponent } from '@src/app/pages/author/author.component';
import { StopPropagationDirective } from '@src/app/directives/stop-propagation.directive';
import { RatingComponent } from '@src/app/components/rating/rating.component';
import { HeroPanelComponent } from '@src/app/components/hero-panel/hero-panel.component';
import { HeroImageComponent } from '@src/app/components/hero-image/hero-image.component';
import { CircleListComponent } from '@src/app/components/circle-list/circle-list.component';
import { CircleButtonComponent } from '@src/app/components/circle-button/circle-button.component';
import { ProfileCardComponent } from '@src/app/components/profile-card/profile-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LibraryComponent,
    BooksComponent,
    FriendsComponent,
    ProfileComponent,
    BookCardListComponent,
    BookCardComponent,
    BookCardActionsComponent,
    BookCardDialogComponent,
    BookComponent,
    AuthorsComponent,
    AuthorComponent,
    StopPropagationDirective,
    RatingComponent,
    HeroPanelComponent,
    HeroImageComponent,
    CircleListComponent,
    CircleButtonComponent,
    ProfileCardComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatIconModule,
    MatDividerModule,
    MatButtonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatMenuModule,
    MatCardModule,
    MatRippleModule,
    MatDialogModule,
    MatSnackBarModule,
    MatListModule,
    MatTooltipModule,
    MatChipsModule,
    MatTabsModule,
    NgxFilesizeModule,
    AppRoutingModule,
  ],
  entryComponents: [BookCardDialogComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
