import { Component, OnInit } from '@angular/core';
import { Card } from '../../models/card.model';
import { CardsService } from '../../services/cards.service';
import { ActivatedRoute, Router } from '@angular/router';
import { headersToString } from 'selenium-webdriver/http';
import { TopicService } from '../../services/topic.service';
import { Topic } from '../../models/topic.model';


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

    this.cardService.getCard(Number(id)).subscribe(
      result => this.card = result
    );
  }

  save() {
    this.cardService.saveCard(this.card).subscribe(res => this.router.navigate(['/cards']));

  }
  cancel() {
    this.router.navigate(['/cards']);
  }
}
