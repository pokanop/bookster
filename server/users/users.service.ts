import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './user.schema';
import { Model } from 'mongoose';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async create(username: string, password: string): Promise<User> {
    const createdUser = new this.userModel({
      username: username,
      password: password,
    });
    return createdUser.save();
  }

  async destroy(username: string): Promise<any> {
    return this.userModel.deleteOne({ username: username }).exec();
  }

  async findOne(id: string): Promise<User> {
    return this.userModel.findById(id).exec();
  }

  async findBy(username: string): Promise<User> {
    return this.userModel.findOne({ username: username }).exec();
  }
}
