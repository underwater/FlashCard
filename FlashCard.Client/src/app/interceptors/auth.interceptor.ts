import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    private _publicRoutes: string[] = [
        "/api/users/authenticate",
        "/api/users/signup"
    ];
    

    constructor(private _authService: AuthService) {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (this.checkIfPublicRoute(req.url)) {
            return next.handle(req);
        }
        const headers = req.headers
            .set('Authorization', `Bearer ${this._authService.token}`);
        const authReq = req.clone({ headers });
        return next.handle(authReq);
    }

    private checkIfPublicRoute(url: string): boolean {
        // for(let route of this._publicRoutes) {
        //     if (route.indexOf(url) >= 0) {
        //         return true;
        //     }
        // }
        // return false;
        //"/api/users/authenticate/api/users/signup"
        return this._publicRoutes.join("").indexOf(url) >= 0;
    }
}