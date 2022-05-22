import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UsersComponent} from "./users/users.component";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {PostsComponent} from "../post/posts-components/posts/posts.component";
import {CommentComponent} from "../comment/comments-components/comment/comment.component";
import {HomeComponent} from "../../app-components/home/home.component";
import {UserDetailesComponent} from "./user-detailes/user-detailes.component";

const routes: Routes = [
  {
    path: '', component: UsersComponent,
    children: [
      {
        path: ':id', component: UserDetailesComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes),HttpClientModule],
  exports: [RouterModule]
})
export class UserRoutingModule { }
