import { Component, OnInit } from '@angular/core';
import { CardsService } from '../services/cards.service';
import { Card } from '../models/card.model';


@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css']
})
export class CardListComponent implements OnInit {
  public cards: Card[];
  constructor(private cardService: CardsService) { }

  ngOnInit() {
    this.cards = this.cardService.cards;
  }

}
