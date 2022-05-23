import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";

import {HomeComponent} from "./app-components/home/home.component";

let routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'user', loadChildren: () => import('./modules/user/user.module').then(m => m.UserModule)
  },
  {
    path: 'post', loadChildren: () => import('./modules/post/post.module').then(value => value.PostModule)
  },
  {
    path: 'comments', loadChildren: () => import('./modules/comment/comment.module').then(value => value.CommentModule)
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
