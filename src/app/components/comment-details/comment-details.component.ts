import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

import {CommentsService} from "../../services/comments.service";
import {CommentInterface} from "../../interface/comment.interface";

@Component({
  selector: 'app-comment-details',
  templateUrl: './comment-details.component.html',
  styleUrls: ['./comment-details.component.css']
})
export class CommentDetailsComponent implements OnInit {

  commentObj: CommentInterface;

  constructor(private activatedRoute: ActivatedRoute, activatedRoute1: ActivatedRoute, private router: Router,
              private commentsService: CommentsService) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(({id}) => {
      this.commentsService.getComment(id).subscribe(value => this.commentObj = value)
    })
  }

}
