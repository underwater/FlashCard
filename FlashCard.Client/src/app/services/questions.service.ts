import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Question } from '../models/question.model';
import { Answer } from '../models/answer.model';

@Injectable({ providedIn: 'root' })
export class QuestionsAdminService {
  private url = 'http://localhost:5000/api/admin/questions';
  constructor(private http: HttpClient) { }

  async getQuestions(): Promise<Question[]> {
    return this.http.get<Question[]>(this.url).toPromise();
  }

  async getQuestion(id: number): Promise<Question> {
    return this.http.get<Question>(this.url + `/${id}`).toPromise();
  }

  async removeQuestion(questionId: number): Promise<Question> {
    return this.http.delete<Question>(this.url + `/${questionId}`).toPromise();
  }

  async removeAnswer(answerId: number): Promise<Answer> {
    return this.http.delete<Answer>(`${this.url}/answers/${answerId}`).toPromise()
  }

  async addQuestion(question: Question): Promise<Question> {
    //TODO: Implement
    throw new Error("Not implemented");
  }

  async updateQuestion(question: Question): Promise<Question> {
    //TODO: Implement
    throw new Error("Not implemented");
  }

  async addAnswer(questionId: number, answer: Partial<Answer>): Promise<Answer> {
    return this.http.post<Answer>(`${this.url}/${questionId}/answers`, answer).toPromise();
  }
}
