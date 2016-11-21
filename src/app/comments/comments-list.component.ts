/* * * ./app/comments/components/comment-list.component.ts * * */
// Imports
import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Observable } from 'rxjs/Observable';


import { Comment } from '../model/comment';
import {CommentService} from '../services/comment.service';
import { EmitterService } from '../services/emitter.service';

// Component decorator
@Component({
    selector: 'comment-list',
    template:``
})
// Component class
export class CommentListComponent implements OnInit, OnChanges{
    // Constructor with injected service
    constructor(
        private commentService: CommentService
        ){}
    // Local properties
    comments: Comment[];


    loadComments(){
        // Get all comments
         this.commentService.getComments()
                           .subscribe(
                               comments => {this.comments = comments;
                                  console.log(this.comments);
                               }, //Bind to view
                                err => {
                                    // Log errors if any
                                    console.log("error output : " + err);
                                });

                                // Get all comments
                                 this.commentService.getEmployee()
                                                   .subscribe(
                                                       x => {
                                                          console.log(x);
                                                       }, //Bind to view
                                                        err => {
                                                            // Log errors if any
                                                            console.log("error output : " + err);
                                                        });


    }

    ngOnInit(){
            // Load comments
            console.log("loading comments...");
            this.loadComments();
    }


    ngOnChanges(changes:any) {

    }

 }
