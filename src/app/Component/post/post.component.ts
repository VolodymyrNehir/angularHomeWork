import {Component, Input, OnInit} from '@angular/core';
import {IPost} from "../../Models/IPost";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
@Input()
post:IPost | any;
  constructor() { }

  ngOnInit(): void {
  }

}
