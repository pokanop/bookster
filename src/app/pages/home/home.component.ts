import { Component, OnInit } from '@angular/core';
import { Book } from '../../models/book.model';
import { BookService } from '@src/app/services/book.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  name = 'Sahel'; // TODO: Use auth service to get this
  noteworthyBooks: Book[];
  recommendedBooks: Book[];
  unfinishedBooks: Book[];
  friendsBooks: Book[];

  constructor(private bookService: BookService) {
    this.noteworthyBooks = bookService.getRandomBooks(8);
    this.recommendedBooks = bookService.getRandomBooks(12);
    this.unfinishedBooks = bookService.getRandomBooks(5);
    this.friendsBooks = bookService.getRandomBooks(7);
  }

  ngOnInit() {}

  foxSay() {
    window.open('https://www.youtube.com/watch?v=jofNR_WkoCE', '_blank');
  }
}
