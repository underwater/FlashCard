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

  constructor(private route: ActivatedRoute, private http: HttpClient) { }

  private baseUrl = environment.serverRoute;

  action: string;

  ngOnInit() {
    //
    // TODO: why wont be  snapshot only triggered when we navigate away from component, and navigate back,
    this.action = this.route.snapshot.params.action;
    console.log(this.action);

    // observable
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.runAction(params.get('action'));
    });
  }
  runAction(action: string) {
    switch (action) {
      case 'UnhandledClientException':
        // TODO: why prefixing 'this' doesn't work??
        // this.UnhandledClientException();
        this.UnhandledClientException();
        break;

      case 'HandledClientException':
        this.HandledClientException();
        break;

      case 'NoSuchServerEndPoint':
        this.NoSuchServerEndPoint();
        break;

      case 'UnhandledServerException':
        this.UnhandledServerException();
        break;

      case 'HandledServerException':
        this.HandledServerException();
        break;

      default:
        break;
    }
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
