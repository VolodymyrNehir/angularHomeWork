import {Injectable} from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import {Observable, of} from 'rxjs';
import {UserService} from "../user.service";
import {UsersInterface} from "../../../../models";

@Injectable({
  providedIn: 'root'
})
export class UserResolver implements Resolve<UsersInterface> {
  constructor(private userService: UserService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<UsersInterface> | Promise<UsersInterface> | UsersInterface {
    let {id} = route.params
    return this.userService.getByUsers(id)
  }
}
