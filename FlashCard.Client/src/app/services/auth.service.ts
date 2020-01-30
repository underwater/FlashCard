import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user.model';
import { environment } from 'src/environments/environment';

@Injectable()
export class AuthService {
    constructor(private _http: HttpClient) { }

    private _token: string;

    public get token(): string {
        return this._token;
    }

    async signIn(user: Partial<User>): Promise<User> {
        let response = await this._http.post<User>(`${environment.serverRoot}/api/users/authenticate`, user).toPromise();
        this._token = response.token;
        return response;
    }
    
}