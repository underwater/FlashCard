import { Component, OnInit, createPlatformFactory } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { TopicService } from '../services/topic.service';
import { Topic } from '../models/topic.model';
import { Card } from '../models/card.model';
import { CardsService } from '../services/cards.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-card-item-edit-reactive',
  templateUrl: './card-item-edit-reactive.component.html',
  styleUrls: ['./card-item-edit-reactive.component.css']
})
export class CardItemEditReactiveComponent implements OnInit {

  topics: Topic[];
  card: Card;

  editForm: FormGroup = new FormGroup({
    id: new FormControl(),
    question: new FormControl(),
    answer: new FormControl(),
    isFavorite: new FormControl(),
    topic: new FormControl()
  });

  constructor(
    private topicService: TopicService,
    private cardService: CardsService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.topicService.getTopics().subscribe(values => this.topics = values);
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    this.cardService.getCard(+id).subscribe(card => this.editForm.setValue(card));

    this.editForm.valueChanges.subscribe(value => console.log(value));
  }



}
