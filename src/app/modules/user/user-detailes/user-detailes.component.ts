import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

import {UserService} from "../users-services/user.service";
import {UsersInterface} from "../../../models";

@Component({
  selector: 'app-user-detailes',
  templateUrl: './user-detailes.component.html',
  styleUrls: ['./user-detailes.component.css']
})
export class UserDetailesComponent implements OnInit {
  user: UsersInterface;

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private userService: UserService) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(({id}) => {
      const state = this.router.getCurrentNavigation()?.extras?.state?.['data'] as UsersInterface;
      if (state) {
        this.user = state
      } else {
        this.activatedRoute.data.subscribe(({userData}) =>
          this.user = userData);
      }
    })
  }
}
