import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

import {UsersInterface} from "../../../../models";
import {UserService} from "../../users-services/user.service";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: UsersInterface[];

  constructor(private usersServices: UserService, private activatedRoute: ActivatedRoute) {
  };

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({userData}) =>
      this.users = userData
    );
  }

}
