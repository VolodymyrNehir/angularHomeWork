import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {UserRoutingModule} from './user-routing.module';
import {UserComponent} from "./user/user.component";
import {UsersComponent} from "./users/users.component";
import {UserDetailesComponent} from "./user-detailes/user-detailes.component";


@NgModule({
  declarations: [
    UserComponent,
    UsersComponent,
    UserDetailesComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule {
}
