import { Injectable } from '@angular/core';
import { Card } from '../models/card.model';
import { HttpClient } from '@angular/common/http';
import { ThrowStmt } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class CardsService {

  public cards: Card[];
  private url = 'http://localhost:5000/api/cards';

  constructor(private http: HttpClient) {
    this.getCards();
  }

  getCards() {
    this.http.get<Card[]>(this.url)
      .subscribe(res => this.cards = res);
  }
}
