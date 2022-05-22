import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./app-components/home/home.component";

let routes: Routes = [
  {
    path: '',  component: HomeComponent
  },
  {
    path: 'user', loadChildren: ()=> import('./modules/user/user.module').then(m => m.UserModule)
  },
  {
    path: 'post',loadChildren: ()=> import('./modules/post/post.module').then(value => value.PostModule)
  },
  {
    path: 'comment',loadChildren: ()=> import('./modules/comment/comment.module').then(value => value.CommentModule)
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
