import { Routes } from '@angular/router';

import { HomeComponent } from '@src/app/home/home.component';
import { LibraryComponent } from './library/library.component';
import { BooksComponent } from './books/books.component';
import { ProfileComponent } from './profile/profile.component';
import { FriendsComponent } from './friends/friends.component';

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
    path: 'friends',
    component: FriendsComponent,
  },
  {
    path: 'profile',
    component: ProfileComponent,
  },
];
