import {Component, OnInit} from '@angular/core';

import {CommentsService} from "../../services/comments.service";
import {CommentInterface} from "../../interface/comment.interface";

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  comments: CommentInterface[];

  constructor(private commentServices: CommentsService) {
  }

  ngOnInit(): void {
    this.commentServices.getComments().subscribe(value => this.comments = value)
    console.log(this.comments)
  }

}
