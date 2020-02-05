import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-error-handling',
  templateUrl: './error-handling.component.html',
  styleUrls: ['./error-handling.component.css']
})
export class ErrorHandlingComponent implements OnInit, OnDestroy {
  
  ngOnDestroy(): void {
    for(let sub of this._subscriptions) {
      sub.unsubscribe();
    }
    this._subscriptions = [];
  }

  private baseUrl = environment.serverRoute;
  private readonly url = `${this.baseUrl}/api/ErrorHandling`;

  alert$: Observable<string>;

  private _subscriptions: Subscription[] = [];

  constructor(private http: HttpClient) { }
  /*
  1st / context of error
    synchrounous errors (types ,etc) --> use try / catch
    asynchrounous errors () 'promise rejection' --> use .catch() chaining

    try / catch --> can be used with async methods can be used

  */
  ngOnInit() {
    this.alert$ = Observable.create(handler => {
      let i = 1;
      let t = setInterval(() => {
        handler.next(`foo ${i}`);
        i++;
      }, 2000);
      setTimeout(() => {
        clearInterval(t);
        handler.complete();
      }, 10000);
    });

    //Listener 1
    this._subscriptions.push(this.alert$.subscribe({
      next: value => console.log(`Listener 1: ${value}`),
      complete: () => console.log("Listener 1 reports that the stream is closed"),
      error: () => console.error("Listener 1 errored")
    }));

    setTimeout(() => {
      //Listener 2
      this._subscriptions.push(this.alert$.subscribe(value => {
        console.log(`Listener 2: ${value}`);
      }, err => {
        console.log("Listener 2 errored");
      }, () => {
        console.log("Listener completed");
      }));
    }, 4000);

  }

  UnhandledClientException() {
    throw new Error('Unhandled client exception');
  }

  HandledClientException() {
    try {
      throw new Error('Handled client exception');
    } catch (ex) {
      // TODO: doesn't seem to run after exception caught
      console.error('handled error', ex);
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
