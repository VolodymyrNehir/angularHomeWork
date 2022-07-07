import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {IToken, IUser} from "../interface";
import {Observable, tap} from "rxjs";
import {urls} from "../contents/urls";

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  private accessTokenKey = 'access'
  private refreshTokenKey = 'refresh'


  constructor(private httpClient:HttpClient) { }

  refresh(): Observable<IToken> {
    const refresh = this.getRefreshToken();
    console.log(refresh);
    return this.httpClient.post<IToken>(`${urls.auth}/refresh`, {refresh}).pipe(
      tap((tokens: IToken) => {
        this.setToken(tokens)
      })
    )
  }

  register(user: IUser): Observable<IUser> {
    return this.httpClient.post<IUser>(urls.users, user)
  }

  login(user:IUser): Observable<IToken>{
    return this.httpClient.post<IToken>(urls.auth, user)
  }
  setToken(token: IToken): void {
    localStorage.setItem(this.accessTokenKey, token.access)
    localStorage.setItem(this.refreshTokenKey, token.refresh)
  }

  getAccessToken(): string {
    return localStorage.getItem(this.accessTokenKey) as string;
  }

  getRefreshToken(): string {
    return localStorage.getItem(this.refreshTokenKey) as string;
  }

  deleteToken(): void {
    localStorage.removeItem(this.accessTokenKey)
    localStorage.removeItem(this.refreshTokenKey)
  }

  isAuthorization(): boolean {
    return !!localStorage.getItem(this.accessTokenKey)
  }
}
