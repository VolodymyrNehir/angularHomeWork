import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {CommentsComponent} from "./comments-components/comments/comments.component";
import {CommentDetailesComponent} from "./comments-components/comment-detailes/comment-detailes.component";

const routes: Routes = [

  {
    path: '', component: CommentsComponent, children: [
      {
        path: ':id', component: CommentDetailesComponent
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
