import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {UsersInterface} from "../../../models";
import {urls} from "../../../constans/urls";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getUsers(): Observable<UsersInterface[]>{
    return this.http
      .get<UsersInterface[]>(urls.users)
  }
  getByUsers(id:string):Observable<UsersInterface>{
    return this.http
      .get<UsersInterface>(`${urls.users}/{id}`)
  }
}
