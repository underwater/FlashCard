import { Injectable } from '@angular/core';
import { Card } from '../models/card.model';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};
@Injectable({
  providedIn: 'root'
})
export class CardsService {

  private url = 'http://localhost:5000/api/cards';

  constructor(private http: HttpClient) {
  }

  getCards(): Observable<Card[]> {
    return this.http.get<Card[]>(this.url, httpOptions);
  }

  // TODO: is there a better way to pass parameter to HttpClient (using new HttpParams object)
  getCard(id: number): Observable<Card> {
    return this.http.get<Card>(this.url + `/${id}`, httpOptions);
  }
  deleteCard(card: Card): Observable<Card> {
    return this.http.delete<Card>(this.url + `/${card.id}`, httpOptions);
  }

  addCard(card: Card): Observable<Card> {
    return this.http.post<Card>(this.url, card, httpOptions);
  }

  saveCard(card: Card): Observable<Card> {
    return this.http.put<Card>(this.url, card, httpOptions);
  }
}
