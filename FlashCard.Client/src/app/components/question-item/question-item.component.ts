import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Question } from 'src/app/models/question.model';


@Component({
  selector: 'app-question-item',
  templateUrl: './question-item.component.html',
  styleUrls: ['./question-item.component.css']
})
export class QuestionItemComponent implements OnInit {

  constructor() { }

  @Output() public edit: EventEmitter<any> = new EventEmitter();
  @Output() public delete: EventEmitter<any> = new EventEmitter();

  @Input()
  public Question: Question;

  ngOnInit() {
  }

  deleteQuestion(question: Question) {
    this.delete.emit(question);
  }
  editQuestion(question: Question) {
    this.edit.emit(question);
  }
}
