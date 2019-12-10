import { Component, OnInit } from '@angular/core';
import { Card } from '../models/card.model';
import { CardsService } from '../services/cards.service';
import { ActivatedRoute } from '@angular/router';
import { headersToString } from 'selenium-webdriver/http';


@Component({
  selector: 'app-card-item-edit',
  templateUrl: './card-item-edit.component.html',
  styleUrls: ['./card-item-edit.component.css']
})
export class CardItemEditComponent implements OnInit {

  card: Card;
  constructor(private cardService: CardsService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    console.log(`navigating to id: ${id}`);

    // TODO: Should we just pass the entire card as parameter or instead just the id and inject service to retrive again the object ?
    this.cardService.getCard(Number(id)).subscribe(
      result => this.card = result
    );
  }
}
