import { Routes } from '@angular/router';

import { HomeComponent } from '@src/app/pages/home/home.component';
import { LibraryComponent } from './pages/library/library.component';
import { BooksComponent } from './pages/books/books.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { FriendsComponent } from './pages/friends/friends.component';
import { BookComponent } from './pages/book/book.component';
import { AuthorsComponent } from './pages/authors/authors.component';
import { AuthorComponent } from './pages/author/author.component';
import { UserComponent } from './pages/user/user.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full',
  },
  {
    path: 'library',
    component: LibraryComponent,
  },
  {
    path: 'books',
    component: BooksComponent,
  },
  {
    path: 'books/:id',
    component: BookComponent,
  },
  {
    path: 'authors',
    component: AuthorsComponent,
  },
  {
    path: 'authors/:id',
    component: AuthorComponent,
  },
  {
    path: 'friends',
    component: FriendsComponent,
  },
  {
    path: 'profile',
    component: ProfileComponent,
  },
  {
    path: 'users/:id',
    component: UserComponent,
  },
];
