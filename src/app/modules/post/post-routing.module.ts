import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PostsComponent} from "./posts-components/posts/posts.component";
import {HttpClientModule} from "@angular/common/http";
import {PostDetailesComponent} from "./posts-components/post-detailes/post-detailes.component";

const routes: Routes = [
  {
    path: '', component: PostsComponent,
    children:[
      {
        path:':id', component:PostDetailesComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes),HttpClientModule],
  exports: [RouterModule]
})
export class PostRoutingModule { }
