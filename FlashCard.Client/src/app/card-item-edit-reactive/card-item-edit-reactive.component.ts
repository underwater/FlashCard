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


  ngOnInit() {
    this.topicService.getTopics().subscribe(values => this.topics = values);
    const id = this.activatedRoute.snapshot.paramMap.get('id');

    this.initialLoad = this.cardService.getCard(+id)
      .subscribe(
        card => { this.editForm.patchValue(card); },
        err => { },
        () => { });

    this.noRules = this.editForm.get('norules').valueChanges.subscribe(state => this.updateValidationRules(state));
  }

  ngOnDestroy(): void {
    this.initialLoad.unsubscribe();
    // TODO: since form will be destroyed with control, no need to explicitly unsubscribe, right ?
    this.noRules.unsubscribe();
  }
  // TODO: Dynamically changing validators doesn't seem to be working
  updateValidationRules(disableValidators: boolean) {
    this.editForm.clearValidators();
    if (disableValidators) {
      this.editForm.setValidators([Validators.required]);
    } else {
      this.editForm.setValidators([Validators.required, blackListedWordValidator]);
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
