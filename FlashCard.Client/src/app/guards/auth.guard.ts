import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, Router, CanActivateChild, UrlTree } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private _authService: AuthService, private _router: Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree {
        if (this._authService.isLoggedIn) {
            return true;
        }
        else {
            // this._router.navigate(["signin"]);
            // return false;
            return this._router.createUrlTree(["signin"]);
        }
    }
}