import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Card } from '../../models/card.model';

@Component({
  selector: 'app-card-item',
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.css']
})
export class CardItemComponent implements OnInit {
  @Output() public edit: EventEmitter<any> = new EventEmitter();
  @Output() public editReactive: EventEmitter<any> = new EventEmitter();
  @Output() public delete: EventEmitter<any> = new EventEmitter();

  @Input()
  card: Card;
  isAnswerShown = false;
  constructor() { }

  ngOnInit() {
  }

  toggleAnswer() {
    this.isAnswerShown = !this.isAnswerShown;
  }

  deleteCard(card: Card) {
    this.delete.emit(card);
  }

  editCard(card: Card) {
    this.edit.emit(card);
  }

  editCardReactive(card: Card) {
    this.editReactive.emit(card);
  }

}
