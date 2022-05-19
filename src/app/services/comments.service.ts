import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

import {CommentInterface} from "../interface/comment.interface";

@Injectable({
  providedIn: 'root'
})
export class CommentsService {
  url = 'http://jsonplaceholder.typicode.com/comments';

  constructor(private http: HttpClient) {
  }

  getComments(): Observable<CommentInterface[]> {
    return this.http.get<CommentInterface[]>(this.url)
  }

  getComment(id: number): Observable<CommentInterface> {
    return this.http.get<CommentInterface>(this.url + '/' + id)
  }
}
