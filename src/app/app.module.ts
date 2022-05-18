import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {PostsComponent} from './components/posts/posts.component';
import {CommentsComponent} from './components/comments/comments.component';
import {PostComponent} from './components/post/post.component';
import {CommentComponent} from './components/comment/comment.component';
import {RouterModule} from "@angular/router";
import {PostDetailsComponent} from './components/post-details/post-details.component';
import {HttpClientModule} from "@angular/common/http";
import {CommentDetailsComponent} from './components/comment-details/comment-details.component';

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    CommentsComponent,
    PostComponent,
    CommentComponent,
    PostDetailsComponent,
    CommentDetailsComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    RouterModule.forRoot([
      {path: 'comments', component: CommentsComponent,
        children: [{path: 'comment-details/:id',component: CommentDetailsComponent}]},
      {
        path: 'posts', component: PostsComponent,
        children: [{path: ':id', component: PostDetailsComponent}]
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
