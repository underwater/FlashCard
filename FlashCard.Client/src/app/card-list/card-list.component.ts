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

  onEdit(card: Card) {
    this.router.navigate(['/card/edit/', card.id]);
  }

  onEditReactive(card: Card) {
    this.router.navigate(['/card/editreactive/', card.id]).then(
      // do something else?
    );

  }
  onDelete(card: Card) {
    // are you sure
    this.cardService.deleteCard(card).subscribe(
      res => {
        this.cards = this.cards.filter(c => c.id !== res.id);
      },
      err => {
        console.log(err);
      });
  }

}
