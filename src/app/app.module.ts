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
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
