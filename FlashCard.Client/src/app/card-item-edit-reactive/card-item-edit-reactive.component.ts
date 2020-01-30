import { Component, OnInit, createPlatformFactory, OnDestroy, } from '@angular/core';
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

  constructor(
    private topicService: TopicService,
    private cardService: CardsService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder
  ) { }

  topics: Topic[];
  card: Card;
  initialLoad: Subscription;
  noRules: Subscription;

  editForm = this.formBuilder.group({
    norules: [false],
    id: [null],
    question: ['', [Validators.required, blackListedWordValidator]],
    answer: [''],
    isFavorite: [null],
    topic: [null, Validators.required]
  });

  get questionControl(): FormControl {
    return this.editForm.get('question') as FormControl;
  }

  ngOnInit() {
    this.topicService.getTopics().subscribe(values => this.topics = values);
    const id = this.activatedRoute.snapshot.paramMap.get('id');

    this.initialLoad = this.cardService.getCard(+id)
      .subscribe(
        card => { this.editForm.patchValue(card); },
        err => { },
        () => { });

    this.noRules = this.editForm.get('norules').valueChanges
      .subscribe(state => this.updateValidationRules(state));
  }

  ngOnDestroy(): void {
    this.initialLoad.unsubscribe();
    this.noRules.unsubscribe();
  }

  updateValidationRules(disableValidators: boolean) {
    this.questionControl.clearValidators();
    if (disableValidators) {
      this.questionControl.setValidators([Validators.required]);
      this.editForm.markAllAsTouched();
    } else {
      this.questionControl.setValidators([Validators.required, blackListedWordValidator]);
      this.editForm.markAllAsTouched();
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
