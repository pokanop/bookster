import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { randomUsers, randomElement, randomUser } from '../helpers/random';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private users = new Map<string, User>();
  private currentUser: User;

  constructor() {
    this.currentUser = randomUser();
    this.currentUser.name = 'Foo Bar';
    this.setUser(this.currentUser);
  }

  public getUser(id: string): User | undefined {
    return this.users.get(id);
  }

  public setUser(user: User) {
    this.users.set(user.id, user);
  }

  public getCurrentUser(): User {
    return this.currentUser;
  }

  public getUsers(): User[] {
    return Array.from(this.users.values());
  }
}
