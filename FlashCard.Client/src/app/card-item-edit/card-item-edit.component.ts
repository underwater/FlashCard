import { Component, OnInit } from '@angular/core';
import { Card } from '../models/card.model';
import { CardsService } from '../services/cards.service';
import { ActivatedRoute, Router } from '@angular/router';
import { headersToString } from 'selenium-webdriver/http';
import { TopicService } from '../services/topic.service';
import { Topic } from '../models/topic.model';


@Component({
  selector: 'app-card-item-edit',
  templateUrl: './card-item-edit.component.html',
  styleUrls: ['./card-item-edit.component.css']
})
export class CardItemEditComponent implements OnInit {

  card: Card;
  topics: Topic[];
  constructor(
    private cardService: CardsService,
    private topicService: TopicService,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.topicService.getTopics().subscribe(topics => this.topics = topics);

    const id = this.activatedRoute.snapshot.paramMap.get('id');
    console.log(`navigating to id: ${id}`);

    // TODO: Should we just pass the entire card as parameter or instead just the id and inject service to retrive again the object ?
    this.cardService.getCard(Number(id)).subscribe(
      result => this.card = result
    );
  }

  save() {
    // save and return to list
    this.cardService.saveCard(this.card).subscribe(res => this.router.navigate(['/Cards']));

  }
  cancel() {
    // don't save just return to list
    this.router.navigate(['/Cards']);
  }
}
