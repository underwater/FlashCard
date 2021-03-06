import { Component, OnInit } from '@angular/core';
import { TopicService } from '../../services/topic.service';
import { Topic } from '../../models/topic.model';

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
    this.topicService.getTopics().subscribe(result => this.topics = result);
  }

  OnAddTopic(topic: Topic) {
    this.topicService.addTopic(topic).subscribe(res => this.topics.push(res));
  }

  // TODO: How to show friendly error to user ?
  OnDeleteTopic(topic: Topic) {
    this.topicService.deleteTopic(topic).subscribe(
      res => {
        this.topics = this.topics.filter(t => t.id !== res.id);
      },
      err => {
        // window.onunhandledrejection = err => {
        //   if (err.status) {
        //     //handle http errors
        //   }
        // }
        // depending on error present something to user

        console.log(err);
      });
  }
}
