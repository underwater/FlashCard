import { Injectable } from '@angular/core';
import { Card } from '../models/card.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CardsService {

  private url = '/api/cards';

  constructor(private http: HttpClient) {
  }

  getCards(): Observable<Card[]> {
    return this.http.get<Card[]>(this.url);
  }
}
