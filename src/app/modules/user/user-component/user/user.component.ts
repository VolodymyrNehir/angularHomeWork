import {Component, Input, OnInit} from '@angular/core';

import {UsersInterface} from "../../../../models";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  @Input()
  users: UsersInterface;

  constructor() {
  }

  ngOnInit(): void {
  }

}
