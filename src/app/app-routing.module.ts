import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {HeaderComponent} from "./components/header/header.component";
import {MainLayoutComponent} from "./layouts/main-layout/main-layout.component";

const routes:Routes =[
  {
    path: '', component: MainLayoutComponent
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
      RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ]
})

export class AppRoutingModule { }
