import { Component, OnInit } from '@angular/core';
import { CardsService } from '../services/cards.service';
import { Card } from '../models/card.model';
import { Router } from '@angular/router';


@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css']
})
export class CardListComponent implements OnInit {

  public cards: Card[];

  constructor(private cardService: CardsService, private router: Router) { }

  ngOnInit() {
    this.cardService.getCards().subscribe(result => this.cards = result);
  }

  // TODO: what if we don't want to do anything after navigation?
  onEdit(card: Card) {
    this.router.navigate(['/card/edit/', card.id]).then(nav =>
      console.log('navigating template edit form', card)
    );
  }

  onEditReactive(card: Card) {
    this.router.navigate(['/card/editreactive/', card.id]).then(nav =>
      console.log('navigating reactive edit form', card)
    );

  }
  onDelete(card: Card) {
    console.log('on delete', card);
  }

}
