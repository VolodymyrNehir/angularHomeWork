import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {IToken, IUser} from "../interface";
import {Observable} from "rxjs";
import {urls} from "../contents/urls";

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  private accessTokenKey = 'access'

  constructor(private httpClient:HttpClient) { }

  register(user: IUser): Observable<IUser> {
    return this.httpClient.post<IUser>(urls.users, user)
  }

  login(user:IUser): Observable<IToken>{
    return this.httpClient.post<IToken>(urls.auth, user)
  }

  setToken(token:IToken):void{
    localStorage.setItem(this.accessTokenKey, token.access)
  }

  isAuthorization():boolean {
    return !!localStorage.getItem(this.accessTokenKey)
  }

}
