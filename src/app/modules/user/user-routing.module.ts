import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HttpClientModule} from "@angular/common/http";

import {UsersComponent} from "./users/users.component";
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
  imports: [RouterModule.forChild(routes), HttpClientModule],
  exports: [RouterModule]
})
export class UserRoutingModule {
}
