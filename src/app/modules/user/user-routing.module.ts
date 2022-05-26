import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HttpClientModule} from "@angular/common/http";

import {UsersComponent} from "./user-component/users/users.component";
import {UserDetailesComponent} from "./user-component/user-detailes/user-detailes.component";
// import {UserResolver} from "./users-services/resolvers/user.resolver";
import {UsersResolver} from "./users-services/resolvers/users.resolver";
import {UserResolver} from "./users-services/resolvers/user.resolver";
import {UserGuard} from "./users-services/guard/user.guard";

const routes: Routes = [
  {
    path: '', component: UsersComponent,
    resolve:{userData:UsersResolver},
    canActivate:[UserGuard],
    children: [
      {
        path: ':id', component: UserDetailesComponent, resolve:{userData: UserResolver}
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
