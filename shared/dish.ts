import { Comment } from './comment';

export class Dish {
  id: number;
  featured: boolean;
  name: string;
  image: string;
  label: string;
  price: string;
  description: string;
  comments: Comment[];
}
