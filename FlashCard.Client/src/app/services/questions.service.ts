import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Question } from '../models/question.model';
const httpOptions = {
  headers: new HttpHeaders({ 'content-type': 'application/json' })
};

// --- q1 --- q2 --- q3
// ---- q[] ---- q[] ---- q[] --- q[]

@Injectable({ providedIn: 'root' })
export class QuestionsAdminService {
  private url = 'http://localhost:5000/api/admin/questions';
  constructor(private http: HttpClient) { }

  getQuestions(): Observable<Question[]> {
    return this.http.get<Question[]>(this.url, httpOptions)
      .pipe(map(r => r.map(q => this.createQuestion(q))));
  }

  getQuestion(id: number): Observable<Question> {
    return this.http.get<Question>(this.url + `/${id}`, httpOptions)
      .pipe(map(r => this.createQuestion(r)));
  }

  private createQuestion(question: Question): Question {
    // @ts-ignore
    const q = new Question();
    Object.keys(question).forEach(key => {
      q[key] = question[key];
    });
    return q;
  }

  deleteQuestion(question: Question): Observable<Question> {
    return this.http.delete<Question>(this.url + `/${question.id}`, httpOptions);
  }
}
