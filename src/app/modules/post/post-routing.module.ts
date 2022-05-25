import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HttpClientModule} from "@angular/common/http";

import {PostsComponent} from "./posts-components/posts/posts.component";
import {PostDetailesComponent} from "./posts-components/post-detailes/post-detailes.component";
import {PostComponent} from "./posts-components/post/post.component";
import {PostsResolver} from "./post-services/resolvers/posts.resolver";
import {PostResolver} from "./post-services/resolvers/post.resolver";
import {PostGuard} from "./post-services/guard/post.guard";

const routes: Routes = [
  {
    path: '', component: PostsComponent,
    resolve:{postData:PostsResolver},
    canActivate: [PostGuard],
    children: [
      {
        path: ':id', component: PostDetailesComponent, resolve:{postData:PostResolver}
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes), HttpClientModule],
  exports: [RouterModule]
})
export class PostRoutingModule {
}
