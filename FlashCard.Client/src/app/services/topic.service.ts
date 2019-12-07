import { Topic } from '../models/topic.model';
import { OnInit, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class TopicService {

  public topics: Topic[];

  constructor(private http: HttpClient) {
    const url = 'http://localhost:5000/api/topics';
    this.http.get<Topic[]>(url)
      .subscribe(res => this.topics = res);
  }


}
