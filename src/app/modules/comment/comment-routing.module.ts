import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {CommentsComponent} from "./comments-components/comments/comments.component";
import {CommentDetailesComponent} from "./comments-components/comment-detailes/comment-detailes.component";
import {CommentResolver} from "./comment-services/resolvers/comment.resolver";
import {CommentsResolver} from "./comment-services/resolvers/comments.resolver";
import {CommentGuard} from "./comment-services/guard/comment.guard";

const routes: Routes = [

  {
    path: '', component: CommentsComponent,
    resolve:{commentData: CommentsResolver},
    canActivate:[CommentGuard],
    children: [
      {
        path: ':id', component: CommentDetailesComponent, resolve:{commentData:CommentResolver}
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommentRoutingModule {
}
