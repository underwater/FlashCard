import { Component, OnInit, createPlatformFactory, OnDestroy } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { TopicService } from '../services/topic.service';
import { Topic } from '../models/topic.model';
import { Card } from '../models/card.model';
import { CardsService } from '../services/cards.service';
import { Router, ActivatedRoute } from '@angular/router';
import { blackListedWordValidator } from '../validators/blacklisted-word-validator';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-card-item-edit-reactive',
  templateUrl: './card-item-edit-reactive.component.html',
  styleUrls: ['./card-item-edit-reactive.component.css']
})
export class CardItemEditReactiveComponent implements OnInit, OnDestroy {
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  topics: Topic[];
  card: Card;
  subscription: Subscription;

  editForm = this.formBuilder.group({
    id: [null],
    question: ['', [Validators.required, blackListedWordValidator]],
    answer: [''],
    isFavorite: [null],
    topic: [null, Validators.required]
  });

  constructor(
    private topicService: TopicService,
    private cardService: CardsService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder
  ) { }

  /*

  1) add checkbox that says (ignore blacklisted word)
  --> listen to stream of changes coming from the checkbox
  ---> accrodingly redefine the list of validators

 2)  drop down of introduce list of card types, should not make it now a

 3)  addd css styling to capture validation classes red / green borders

 4) handling multiple instances of the same form

  */

  ngOnInit() {
    this.topicService.getTopics().subscribe(values => this.topics = values);
    const id = this.activatedRoute.snapshot.paramMap.get('id');

    // TODO: Is this the right way to initialize the form from service ?
    // tslint:disable-next-line:radix

    this.subscription = this.cardService.getCard(parseInt(id))
      .subscribe(
        card => { this.editForm.setValue(card); },
        err => { },
        () => { });

    this.editForm.get('topic').valueChanges.subscribe(
      (res) => {

        console.log('topic', this.editForm.get('topic'));
        console.log('topic', res);
      });


  }

  save() {
    // grab the form, ,check if valid
    if (this.editForm.valid) {
      this.cardService.saveCard(this.editForm.value)
        .subscribe(
          result => {
            // this.editForm.setValue(result);

          },
          err => console.log('error: ', err)
        );
    }
  }

  // TODO: getting Form submission canceled because the form is not connected
  cancel() {
    this.router.navigate(['/Cards']);
  }


}
