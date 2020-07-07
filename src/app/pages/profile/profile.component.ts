import { Component, OnInit } from '@angular/core';
import { UserService } from '@src/app/services/user.service';
import { User } from '@src/app/models/user.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  currentUser: User;

  constructor(private userService: UserService) {
    this.currentUser = userService.getCurrentUser();
  }

  ngOnInit(): void {}
}
