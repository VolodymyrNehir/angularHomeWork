import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {PostsComponent} from './components/posts/posts.component';
import {CommentsComponent} from './components/comments/comments.component';
import {PostComponent} from './components/post/post.component';
import {CommentComponent} from './components/comment/comment.component';
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    CommentsComponent,
    PostComponent,
    CommentComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: 'posts', component: PostsComponent },
      { path: 'comments', component: CommentsComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
