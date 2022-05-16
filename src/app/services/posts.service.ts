import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {PostsInterface} from "../interface/posts.interface";

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  url = 'http://jsonplaceholder.typicode.com/posts';
  constructor(private http: HttpClient) {
  }

  getPosts(): Observable<PostsInterface[]> {
    return this.http.get<PostsInterface[]>(this.url)
  }
  getPost(id:string): Observable<PostsInterface> {
    return this.http.get<PostsInterface>(this.url +'/'+ id)
  }
}
