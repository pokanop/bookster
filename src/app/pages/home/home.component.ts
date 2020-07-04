import { Component, OnInit } from '@angular/core';
import { Book } from '../../models/book.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  name = 'Sahel'; // TODO: Use auth service to get this
  noteworthyBooks: Book[] = [];
  recommendedBooks: Book[] = [];
  unfinishedBooks: Book[] = [];
  friendsBooks: Book[] = [];

  constructor() {}

  ngOnInit() {}

  foxSay() {
    window.open('https://www.youtube.com/watch?v=jofNR_WkoCE', '_blank');
  }
}
