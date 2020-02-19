import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Question } from '../models/question.model';
const httpOptions = {
  headers: new HttpHeaders({ 'content-type': 'application/json' })
};

@Injectable({ providedIn: 'root' })
export class QuestionsAdminService {
  private url = 'http://localhost:5000/api/admin/questions';
  constructor(private http: HttpClient) { }

  getQuestions(): Observable<Question[]> {
    return this.http.get<Question[]>(this.url, httpOptions);
  }
}
