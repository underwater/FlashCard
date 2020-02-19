import { Topic } from './topic.model';
import { Answer } from './answer.model';
import { Difficulty } from './difficulty.enum';

export class Question {
  constructor(
    public id: number,
    public text: string,
    public topic: Topic,
    public difficulty: Difficulty,
    public answers: Answer[]
  ) { }
}
