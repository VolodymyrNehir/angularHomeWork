import {Component, OnInit} from '@angular/core';

import {PostsService} from "../../services/posts.services/posts.service";
import {PostInterface} from "../../models/post.interface";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts: PostInterface[];

  constructor(private postsService: PostsService) {
  }

  ngOnInit(): void {
    this.postsService.getPosts().subscribe(value => this.posts = value)
  }

}
