import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

import {PostsInterface} from "../../interface/posts.interface";

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {

  postDetailsObj: PostsInterface;

  constructor(private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe(value => {
      let {state: {data}} = history;
      this.postDetailsObj = data as PostsInterface;
    })
    // this.activatedRoute.params.subscribe(({id}) => {
    //   this.postServices.getPost(id).subscribe(value => console.log(value));
    // });
  }
}
