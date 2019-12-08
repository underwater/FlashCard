import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Topic } from '../models/topic.model';


@Component({
  selector: 'app-topic-item',
  templateUrl: './topic-item.component.html',
  styleUrls: ['./topic-item.component.css']
})
export class TopicItemComponent implements OnInit {

  @Input() public topic: Topic;
  @Output() public deleteTopic: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  OnDeleteTopic(topic: Topic) {
    this.deleteTopic.emit(topic);
  }

}
