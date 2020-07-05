import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptModule } from '@nativescript/angular';

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

// Uncomment and add to NgModule imports if you need to use two-way binding and/or HTTP wrapper
// import { NativeScriptFormsModule, NativeScriptHttpClientModule } from '@nativescript/angular';

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
  ],
  imports: [NativeScriptModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class AppModule {}
