import { Component, OnInit, Input } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss'],
})
export class RatingComponent implements OnInit {
  @Input('rating') rating: number = 0;
  @Input('starCount') starCount: number = 5;
  @Input('color') color: string = 'accent';
  private snackBarDuration: number = 2000;
  ratingArr = [];

  constructor(private snackBar: MatSnackBar) {}

  ngOnInit() {
    for (let index = 0; index < this.starCount; index++) {
      this.ratingArr.push(index);
    }
  }

  onClick(rating: number) {
    this.snackBar.open('Thanks for rating this book!', '', {
      duration: this.snackBarDuration,
    });
    this.rating = rating;
    return false;
  }

  showIcon(index: number) {
    if (this.rating >= index + 1) {
      return 'star';
    } else {
      return 'star_border';
    }
  }
}

export enum StarRatingColor {
  primary = 'primary',
  accent = 'accent',
  warn = 'warn',
}
