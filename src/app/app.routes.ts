import { Routes } from '@angular/router';

import { HomeComponent } from '@src/app/pages/home/home.component';
import { LibraryComponent } from './pages/library/library.component';
import { BooksComponent } from './pages/books/books.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { FriendsComponent } from './pages/friends/friends.component';

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
