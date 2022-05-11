import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

import {IComment} from "../../Models/IComment";

@Injectable({
  providedIn: 'root'
})
export class CommentsService {
  url = 'http://jsonplaceholder.typicode.com/comments';

  constructor(private http: HttpClient) { }

  getComment(): Observable<IComment[]> {
    return this
      .http
      .get<any[]>(this.url);

  }
}
