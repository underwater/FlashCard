import { Component, ViewEncapsulation, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
    encapsulation: ViewEncapsulation.None,
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
    title = 'clientApp';
    private _sub: Subscription;

    constructor(private _authService: AuthService, private _router: Router) {

    }

    ngOnInit() {
        this._sub = this._authService.tokenExpired$.subscribe(() => {
            this._router.navigate(["signin"]);
        });
    }

    ngOnDestroy() {
        this._sub.unsubscribe();
    }
}
