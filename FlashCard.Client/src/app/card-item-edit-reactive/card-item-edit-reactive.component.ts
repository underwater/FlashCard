import { Component, OnInit, createPlatformFactory, OnDestroy, AfterViewInit } from '@angular/core';
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
export class CardItemEditReactiveComponent implements OnInit, AfterViewInit, OnDestroy {

  constructor(
    private topicService: TopicService,
    private cardService: CardsService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder
  ) { }

  topics: Topic[];
  card: Card;
  subscription: Subscription;

  editForm = this.formBuilder.group({
    norules: [false],
    id: [null],
    question: ['', [Validators.required, blackListedWordValidator]],
    answer: [''],
    isFavorite: [null],
    topic: [null, Validators.required]
  });

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  /*



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
        card => { this.editForm.patchValue(card); },
        err => { },
        () => { });





  }
  // TODO: since form will be destroyed with control, no need to explicitly unsubscribe, right ?
  // TODO: strange, not able to get hold of this field, (Error: Must supply a value for form control with name: 'norules').

  ngAfterViewInit() {
    this.editForm.get('norules').valueChanges.subscribe(state => this.updateValidationRules(state));
  }

  updateValidationRules(state: boolean) {
    this.editForm.clearValidators();
    if (state) {
      this.editForm.setValidators([Validators.required, blackListedWordValidator]);
    } else {
      this.editForm.setValidators([Validators.required]);
    }
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
