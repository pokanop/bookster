import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { randomUsers } from '../helpers/random';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private users: Map<string, User> = this.seedUsers();

  constructor() {}

  public get(id: string): User | undefined {
    return this.users.get(id);
  }

  public set(user: User) {
    this.users.set(user.id, user);
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
