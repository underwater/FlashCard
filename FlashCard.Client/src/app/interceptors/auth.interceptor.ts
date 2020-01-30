import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    constructor(private _authService: AuthService) {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (req.url.indexOf("/api/users/authenticate") >= 0) {
            return next.handle(req);
        }
        const headers = req.headers
            .set('Authorization', `Bearer ${this._authService.token}`);
        const authReq = req.clone({ headers });
        return next.handle(authReq);
    }
}