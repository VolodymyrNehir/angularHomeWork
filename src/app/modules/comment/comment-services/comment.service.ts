import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {CommentInterface} from "../../../models";
import {Observable} from "rxjs";
import {urls} from "../../../constans/urls";

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private http:HttpClient) { }
  getComments():Observable<CommentInterface[]>{
    return this.http
      .get<CommentInterface[]>(urls.comments)
  }
  getComment(id:string):Observable<CommentInterface>{
    return this.http
      .get<CommentInterface>(`${urls.comments}id`)
  }
}
