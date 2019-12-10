import { Topic } from '../models/topic.model';
import { OnInit, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}


@Injectable()
export class TopicService {

  constructor(private http: HttpClient) {
    this.getTopics();
  }

  getTopics(): Observable<Topic[]> {
    return this.http.get<Topic[]>('/api/topics', httpOptions);
  }

  addTopic(topic: Topic): Observable<Topic> {
    return this.http.post<Topic>('/api/topics', topic, httpOptions);
  }

  deleteTopic(topic: Topic): Observable<Topic> {
    return this.http.delete<Topic>('/api/topics/' + topic.id, httpOptions);
  }
}
