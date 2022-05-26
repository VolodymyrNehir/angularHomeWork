import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {UserRoutingModule} from './user-routing.module';
import {UserComponent} from "./user-component/user/user.component";
import {UsersComponent} from "./user-component/users/users.component";
import {UserDetailesComponent} from "./user-component/user-detailes/user-detailes.component";
import {UserResolver} from "./users-services/resolvers/user.resolver";
import {UsersResolver} from "./users-services/resolvers/users.resolver";


@NgModule({
  declarations: [
    UserComponent,
    UsersComponent,
    UserDetailesComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule

  ], providers: [
    UserResolver,
    UsersResolver
  ]
})
export class UserModule {
}
