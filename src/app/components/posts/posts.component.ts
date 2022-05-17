import {Component, OnInit} from '@angular/core';

import {PostsInterface} from "../../interface/posts.interface";
import {PostsService} from "../../services/posts.service";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: PostsInterface[];

  constructor(private postsService: PostsService) {
  }

  ngOnInit(): void {
    this.postsService.getPosts().subscribe(value => this.posts = value)

  }

}
