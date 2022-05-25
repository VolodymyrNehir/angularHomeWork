import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

import {CommentService} from "../../comment-services/comment.service";
import {CommentInterface} from "../../../../models";

@Component({
  selector: 'app-comment-detailes',
  templateUrl: './comment-detailes.component.html',
  styleUrls: ['./comment-detailes.component.css']
})
export class CommentDetailesComponent implements OnInit {
  comment: CommentInterface;

  constructor(private commentService: CommentService, private router: Router, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(({id}) => {
      const state = this.router.getCurrentNavigation()?.extras?.state?.['data'] as CommentInterface;
      if (state) {
        this.comment = state
      } else {
        this.activatedRoute.data.subscribe(({commentData}) =>
          this.comment = commentData
        );
      }
    })
  }
}
