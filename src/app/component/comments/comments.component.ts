import {Component, OnInit} from '@angular/core';

import {CommentInterface} from "../../models/comment.interface";
import {CommentsService} from "../../services/comments.services/comments.service";

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  comment: CommentInterface[];

  constructor(private commentsServices: CommentsService) {
  }

  ngOnInit(): void {
    this.commentsServices.getComment().subscribe(value => this.comment = value)
  }

}
