import { Topic } from './topic.model';
import { Answer } from './answer.model';
import { Difficulty } from './difficulty.enum';

export interface Question {
  id: number;
  text: string;
  topic: Topic;
  difficulty: Difficulty;
  answers: Answer[];
}