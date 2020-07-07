import { Component, OnInit, Input } from '@angular/core';
import { User } from '@src/app/models/user.model';

@Component({
  selector: 'app-profile-card',
  templateUrl: './profile-card.component.html',
  styleUrls: ['./profile-card.component.scss'],
})
export class ProfileCardComponent implements OnInit {
  @Input() user: User;

  constructor() {}

  ngOnInit(): void {}
}
