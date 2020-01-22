import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-error-handling',
  templateUrl: './error-handling.component.html',
  styleUrls: ['./error-handling.component.css']
})
export class ErrorHandlingComponent implements OnInit {
  private baseUrl = environment.serverRoute;
  private readonly url = `${this.baseUrl}/api/ErrorHandling`;

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  UnhandledClientException() {
    throw new Error('Unhandled client exception');
  }

  HandledClientException() {
    try {
      throw new Error('Handled client exception');
    } catch (ex) {
      // TODO: doesn't seem to run after exception caught
      console.log('handled error', ex);
    }

  }

  NoSuchServerEndPoint() {
    // TODO: should this time out and return promise rejection?
    this.http.get('no such url').subscribe();
    // .catchError(err => console.log(err));
  }

  UnhandledServerException() {
    const url = `${this.baseUrl}/unhandledError/`;
    // TODO: what should happen here if I don't change .catchError()??
    this.http.get(url);
    // .catchError(err => console.log(err));
  }

  HandledServerException() {
    const url = `${this.baseUrl}/handledError/`;
    // TODO: what should happen?
    this.http.get(url);

  }
}
