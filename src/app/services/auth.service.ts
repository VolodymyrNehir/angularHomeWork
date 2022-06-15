import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {IToken, IUser} from "../interface";
import {Observable} from "rxjs";
import {urls} from "../contents/urls";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient:HttpClient) { }

  register(user: IUser): Observable<IUser> {
    return this.httpClient.post<IUser>(urls.users, user)
  }

  login(user:IUser): Observable<IToken>{
    return this.httpClient.post<IToken>(urls.auth, user)
  }

}
