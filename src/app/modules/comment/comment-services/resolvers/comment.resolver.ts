import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import {CommentInterface} from "../../../../models";
import {CommentService} from "../comment.service";

@Injectable({
  providedIn: 'root'
})
export class CommentResolver implements Resolve<CommentInterface> {
  constructor(private commentService:CommentService) {
  }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<CommentInterface> | Promise<CommentInterface> | CommentInterface {
    let {id} = route.params;
    return this.commentService.getComment(id)
  }
}
