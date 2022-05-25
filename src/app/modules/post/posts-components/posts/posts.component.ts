import {Component, OnInit} from '@angular/core';

import {PostService} from "../../post-services/post.service";
import {PostInterface} from "../../../../models";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: PostInterface[];

  constructor(private postService: PostService, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({postData}) =>
      this.posts = postData
    )
  }
}
