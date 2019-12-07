import { Injectable } from '@angular/core';
import { Card } from '../models/card.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CardsService {

  public cards: Card[];
  private url = '/api/cards';

  constructor(private http: HttpClient) {
    this.getCards();
  }

  getCards() {
    this.http.get<Card[]>(this.url)
      .subscribe(res => this.cards = res);
  }
}
