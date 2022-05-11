import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import { PostComponent } from './Component/post/post.component';
import {PostsComponent} from "./Component/posts/posts.component";
import { CommentsComponent } from './Component/comments/comments.component';
import { CommentComponent } from './Component/comment/comment.component';

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    PostComponent,
    CommentsComponent,
    CommentComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
