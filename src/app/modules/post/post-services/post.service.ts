import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {PostInterface} from "../../../models";
import {urls} from "../../../constans/urls";

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http:HttpClient) { }
  getPosts():Observable<PostInterface[]>{
    return this.http
      .get<PostInterface[]>(urls.posts)
  }
  getPost(id:string):Observable<PostInterface>{
    return this.http
      .get<PostInterface>(`${urls.posts}/id`)
  }
}
