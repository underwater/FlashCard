import { Injectable, inject, InjectionToken, Injector } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user.model';
import { environment } from 'src/environments/environment';
import { SERVER_ROOT } from "../SERVER_ROOT";

@Injectable()
export class AuthService {
    private _serverRoot: string;
    constructor(private _http: HttpClient, private _injector: Injector) {
        this._serverRoot = this._injector.get(SERVER_ROOT);
    }

    public get token(): string {
        return localStorage.getItem("token");
    }

    public get isLoggedIn(): boolean {
        return this.token && this.token.length > 0;
    }

    async signIn(user: Partial<User>): Promise<User> {
        let response = await this._http.post<User>(`${this._serverRoot}/api/users/authenticate`, user).toPromise();
        localStorage.setItem("token", response.token);
        return response;
    }

    signOut() {
        localStorage.removeItem("token");
    }
    
}