import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {PostRoutingModule} from './post-routing.module';
import {PostsComponent} from './posts-components/posts/posts.component';
import {PostComponent} from './posts-components/post/post.component';
import {PostDetailesComponent} from './posts-components/post-detailes/post-detailes.component';
import {PostResolver} from "./post-services/resolvers/post.resolver";
import {PostsResolver} from "./post-services/resolvers/posts.resolver";


@NgModule({
  declarations: [
    PostsComponent,
    PostComponent,
    PostDetailesComponent
  ],
  imports: [
    CommonModule,
    PostRoutingModule
  ],
  providers:[
    PostResolver,
    PostsResolver
  ]
})
export class PostModule {
}
