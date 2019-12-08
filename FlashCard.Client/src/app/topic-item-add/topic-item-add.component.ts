import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Topic } from '../models/topic.model';

@Component({
  selector: 'app-topic-item-add',
  templateUrl: './topic-item-add.component.html',
  styleUrls: ['./topic-item-add.component.css']
})
export class TopicItemAddComponent implements OnInit {

  @Output() addTopic: EventEmitter<any> = new EventEmitter();

  name: string;

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    const newTopic = {
      name: this.name
    };

    this.addTopic.emit(newTopic);
  }

}
