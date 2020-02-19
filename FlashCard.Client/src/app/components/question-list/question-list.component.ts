import { Component, OnInit } from '@angular/core';
import { Question } from 'src/app/models/question.model';
import { QuestionsAdminService } from 'src/app/services/questions.service';

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.css']
})
export class QuestionListComponent implements OnInit {

  public Questions: Question[];

  constructor(private questionService: QuestionsAdminService) { }

  ngOnInit() {
    this.questionService.getQuestions()
      .subscribe(results => this.Questions = results);
  }

}
