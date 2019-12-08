import { Topic } from '../models/topic.model';
import { OnInit, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class TopicService {

  constructor(private http: HttpClient) {
    this.getTopics();
  }

  getTopics(): Observable<Topic[]> {
    return this.http.get<Topic[]>('/api/topics');
  }

  addTopic(topic: Topic): Observable<Topic> {
    return this.http.post<Topic>('/api/topics', topic);
  }

  deleteTopic(topic: Topic): Observable<Topic> {
    return this.http.delete<Topic>('/api/topics/' + topic.id);
  }
}
