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

  // TODO: getter to return # of correct answers Isn't working
  get NumberOfCorrectAnswers(): number {
    return this.answers.filter(a => a.isCorrect === true).length;
  }

}
