import { Component, OnInit, createPlatformFactory } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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
    topic: new FormControl(null, Validators.required)
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

    // TODO: Is this the right way to initialize the form from service ?
    this.cardService.getCard(+id).subscribe(card => this.editForm.setValue(card));

    this.editForm.valueChanges.subscribe(value => console.log(value));
  }

  save() {
    this.cardService.saveCard(this.card)
      .subscribe(
        result => console.log('saved card', result),
        // TODO: getting a "Bad Request" 400 error
        err => console.log('error: ', err)
      );
  }

  // TODO: getting Form submission canceled because the form is not connected
  cancel() {
    this.router.navigate(['/Cards']);
  }


}
