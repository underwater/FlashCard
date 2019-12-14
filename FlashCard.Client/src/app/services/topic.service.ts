import { Topic } from '../models/topic.model';
import { OnInit, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};


@Injectable()
export class TopicService {
  private baseUrl = environment.serverRoute;
  private readonly url = `${this.baseUrl}/api/topics`;

  constructor(private http: HttpClient) {

  }

  getTopics(): Observable<Topic[]> {
    return this.http.get<Topic[]>(this.url, httpOptions);
  }

  addTopic(topic: Topic): Observable<Topic> {
    return this.http.post<Topic>(`${this.baseUrl}/api/topics`, topic, httpOptions);
  }

  deleteTopic(topic: Topic): Observable<Topic> {
    return this.http.delete<Topic>(`${this.baseUrl}/api/topics/` + topic.id, httpOptions);
  }
}
