import { Topic } from './topic.model';

export class Card {
  constructor(
    public question: string,
    public answer: string,
    public isFavorite: boolean,
    public topic: Topic
  ) { }
}
