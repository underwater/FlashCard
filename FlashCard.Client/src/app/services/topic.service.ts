import { Topic } from '../models/topic.model';
import { OnInit, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class TopicService {

  public topics: Topic[];
  private url = 'http://localhost:5000/api/topics';

  // ToDo: this works because we are using a proxy file on the web pack server ?
  // private url = '/api/topics';

  constructor(private http: HttpClient) {
    this.getTopics();
  }

  getTopics() {
    this.http.get<Topic[]>(this.url)
      .subscribe(res => this.topics = res);
  }
}
