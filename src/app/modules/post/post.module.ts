import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {PostRoutingModule} from './post-routing.module';
import {PostsComponent} from './posts-components/posts/posts.component';
import {PostComponent} from './posts-components/post/post.component';
import {PostDetailesComponent} from './posts-components/post-detailes/post-detailes.component';


@NgModule({
  declarations: [
    PostsComponent,
    PostComponent,
    PostDetailesComponent
  ],
  imports: [
    CommonModule,
    PostRoutingModule
  ]
})
export class PostModule {
}
