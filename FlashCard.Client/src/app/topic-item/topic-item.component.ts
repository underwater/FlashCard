import { Component, OnInit, Input } from '@angular/core';
import { Topic } from '../models/topic.model';

@Component({
  selector: 'app-topic-item',
  templateUrl: './topic-item.component.html',
  styleUrls: ['./topic-item.component.css']
})
export class TopicItemComponent implements OnInit {

  @Input() public topic: Topic;

  constructor() { }

  ngOnInit() {
  }

}
