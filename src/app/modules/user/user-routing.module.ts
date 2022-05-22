import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UsersComponent} from "./users/users.component";
import {HttpClient, HttpClientModule} from "@angular/common/http";

const routes: Routes = [
  {
    path: '', component: UsersComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes),HttpClientModule],
  exports: [RouterModule]
})
export class UserRoutingModule { }
