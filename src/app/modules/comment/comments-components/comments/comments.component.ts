import {Component, OnInit} from '@angular/core';

import {CommentService} from "../../comment-services/comment.service";
import {CommentInterface} from "../../../../models";

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  comment: CommentInterface[];

  constructor(private commentService: CommentService) {
  }

  ngOnInit(): void {
    this.commentService.getComments().subscribe(value => this.comment = value)
  }

}
