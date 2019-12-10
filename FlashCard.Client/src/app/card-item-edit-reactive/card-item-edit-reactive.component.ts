import { Component, OnInit, createPlatformFactory } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { TopicService } from '../services/topic.service';
import { Topic } from '../models/topic.model';
import { Card } from '../models/card.model';

@Component({
  selector: 'app-card-item-edit-reactive',
  templateUrl: './card-item-edit-reactive.component.html',
  styleUrls: ['./card-item-edit-reactive.component.css']
})
export class CardItemEditReactiveComponent implements OnInit {

  topics: Topic[];
  card: Card;

  editForm: FormGroup = new FormGroup({
    question: new FormControl(),
    answer: new FormControl(),
    isFavorite: new FormControl(),
    topic: new FormControl()
  });

  constructor(private topicService: TopicService) {

  }

  ngOnInit() {
    this.editForm.valueChanges.subscribe(value => console.log(value));

    this.topicService.getTopics().subscribe(values => this.topics = values);
  }

  setQuestion() {
    // this.question.setValue('what is your name?');
  }

}
