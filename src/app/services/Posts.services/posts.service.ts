import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {IPost} from "../../Models/IPost";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PostsService {
url = 'http://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) { }

  getPosts(): Observable<IPost[]> {
    return this
      .http
      .get<any[]>(this.url);

  }
  // getComment(): Observable<IPost[]>{
  //   return this.http.get<any[]>(this.url)
  // }
}
