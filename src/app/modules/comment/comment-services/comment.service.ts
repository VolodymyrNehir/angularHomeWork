import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

import {CommentInterface} from "../../../models";
import {urls} from "../../../constans";

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private http: HttpClient) {
  }

  getComments(): Observable<CommentInterface[]> {
    return this.http
      .get<CommentInterface[]>(urls.comments)
  }

  getComment(id: string): Observable<CommentInterface> {
    return this.http
      .get<CommentInterface>(`${urls.comments}`+'/'+`${id}`)
  }
}
