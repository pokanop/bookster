import { Rating } from './rating.enum';
import { User } from './user.model';

export class Review {
  constructor(
    public user: User,
    public rating: Rating,
    public heading: string,
    public detail: string,
    public date: Date
  ) {}
}
