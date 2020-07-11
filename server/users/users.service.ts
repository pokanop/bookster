import { Injectable } from '@nestjs/common';

export type User = any;

@Injectable()
export class UsersService {
  private readonly users: User[];

  constructor() {
    this.users = [
      {
        id: 'A73E92C4-5952-4869-80DC-50E467F5311C',
        username: 'john',
        password: 'changeme',
      },
      {
        id: '20161998-3C96-4528-8395-E5928B40CC80',
        username: 'chris',
        password: 'secret',
      },
      {
        id: '0091A71B-799E-4AC0-B8D3-E1F6256933DE',
        username: 'maria',
        password: 'guess',
      },
    ];
  }

  async findOne(id: string): Promise<User | undefined> {
    return this.users.find((user) => user.id === id);
  }

  async findBy(username: string): Promise<User | undefined> {
    return this.users.find((user) => user.username === username);
  }
}
