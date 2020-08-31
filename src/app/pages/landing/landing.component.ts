import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
})
export class LandingComponent implements OnInit {
  login: boolean = true;

  constructor() {}

  ngOnInit(): void {}

  isLogin(): boolean {
    return this.login;
  }

  isRegister(): boolean {
    return !this.isLogin();
  }
}
