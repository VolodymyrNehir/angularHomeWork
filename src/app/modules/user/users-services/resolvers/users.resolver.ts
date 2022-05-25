import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import {UsersInterface} from "../../../../models";
import {UserService} from "../user.service";

@Injectable({
  providedIn: 'root'
})
export class UsersResolver implements Resolve<UsersInterface[]> {
constructor(private userService: UserService) {
}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<UsersInterface[]> | Promise<UsersInterface[]> | UsersInterface[] {
  return this.userService.getUsers();
}
}
