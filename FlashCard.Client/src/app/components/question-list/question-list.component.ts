import { Component, OnInit } from '@angular/core';
import { Question } from 'src/app/models/question.model';
import { QuestionsAdminService } from 'src/app/services/questions.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.css']
})
export class QuestionListComponent implements OnInit {

  public Questions: Question[];

  constructor(private questionService: QuestionsAdminService, private router: Router) { }

  ngOnInit() {
    this.questionService.getQuestions()
      .subscribe(results => this.Questions = results);
  }

  onEdit(question: Question) {
    this.router.navigate(['/questions/edit', question.id]);
  }

  onDelete(question: Question) {
    this.questionService.deleteQuestion(question).subscribe(
      res => {
        this.Questions = this.Questions.filter(q => q.id !== res.id);
      },
      err => {
        console.log(err);
      }
    );
  }

}
