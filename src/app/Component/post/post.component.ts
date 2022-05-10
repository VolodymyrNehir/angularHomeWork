import { Component, OnInit } from '@angular/core';
import {IPost} from "../../Models/IPost";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
// @Input()
// posts:IPost;
  constructor() { }

  ngOnInit(): void {
  }

}
