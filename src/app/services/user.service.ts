import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { randomUsers, randomElement } from '../helpers/random';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private users: Map<string, User> = this.seedUsers();
  private currentUser: User;

  constructor() {
    this.currentUser = randomElement(Array.from(this.users.values()));
    this.currentUser.name = 'Foo Bar';
  }

  public get(id: string): User | undefined {
    return this.users.get(id);
  }

  public set(user: User) {
    this.users.set(user.id, user);
  }

  public getCurrentUser(): User {
    return this.currentUser;
  }

  private seedUsers(): Map<string, User> {
    let map = new Map<string, User>();
    let users = randomUsers(10);
    users.forEach((user) => {
      map.set(user.id, user);
    });
    return map;
  }
}
