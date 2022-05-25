import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

import {PostService} from "../../post-services/post.service";
import {PostInterface} from "../../../../models";

@Component({
  selector: 'app-post-detailes',
  templateUrl: './post-detailes.component.html',
  styleUrls: ['./post-detailes.component.css']
})
export class PostDetailesComponent implements OnInit {
  post: PostInterface;

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private postService: PostService) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(({id}) => {
      const state = this.router.getCurrentNavigation()?.extras?.state?.['data'] as PostInterface;
      if (state) {
        this.post = state
      } else {
        this.activatedRoute.data.subscribe(({postData}) =>
          this.post = postData);
      }
    })
  }
}
