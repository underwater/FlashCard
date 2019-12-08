import { Component, OnInit } from '@angular/core';
import { TopicService } from '../services/topic.service';
import { Topic } from '../models/topic.model';

@Component({
  selector: 'app-topic-list',
  templateUrl: './topic-list.component.html',
  styleUrls: ['./topic-list.component.css']
})
export class TopicListComponent implements OnInit {

  public topics: Topic[];
  constructor(private topicService: TopicService) { }


  ngOnInit() {
    this.getTopics();
  }
  getTopics() {
    this.topics = this.topicService.topics;
  }

  OnAddTopic(topic: Topic) {
    console.log(topic);
  }

}
