import {Component, OnInit} from '@angular/core';

import {IComment} from "../../Models/IComment";
import {CommentsService} from "../../services/Comments.services/comments.service";

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  comment: IComment[];

  constructor(private commentsServices: CommentsService) {
  }

  ngOnInit(): void {
    this.commentsServices.getComment().subscribe(value => this.comment = value)
  }

}
