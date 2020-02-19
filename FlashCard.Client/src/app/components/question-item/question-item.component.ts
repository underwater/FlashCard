import { Component, OnInit, Input } from '@angular/core';
import { Question } from 'src/app/models/question.model';

@Component({
  selector: 'app-question-item',
  templateUrl: './question-item.component.html',
  styleUrls: ['./question-item.component.css']
})
export class QuestionItemComponent implements OnInit {

  constructor() { }

  @Input()
  public Question: Question;

  ngOnInit() {
  }

}
