import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import {PostInterface} from "../../../../models";
import {PostService} from "../post.service";

@Injectable({
  providedIn: 'root'
})
export class PostResolver implements Resolve<PostInterface> {

  constructor( private postService:PostService) {
  }

resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<PostInterface> | Promise<PostInterface> | PostInterface {
    let {id} = route.params;
    return this.postService.getPost(id);
}
}
