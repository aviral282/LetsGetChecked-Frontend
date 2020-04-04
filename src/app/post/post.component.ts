import {Component, OnInit} from '@angular/core';
import {NgxNavigationWithDataComponent} from 'ngx-navigation-with-data';
import {ApiService} from '../providers/api.service';
import {Post} from '../data/post';
import {Comments} from '../data/comment';

@Component({
    selector: 'app-post',
    templateUrl: './post.component.html',
    styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

    userName;
    postId;

    toAddId;
    addedComment = '';

    toEditId;
    editedComment = '';

    postResponse: Post = new Post();

    constructor(
        private navCtrl: NgxNavigationWithDataComponent,
        private _apiService: ApiService
    ) {
        this.userName = navCtrl.get('name');
        this.postId = navCtrl.get('id');


        if (this.userName === undefined || this.postId === undefined) {
            navCtrl.navigate('');
        }
    }

    ngOnInit(): void {
        this.refreshPage();
    }

    refreshPage() {
        this._apiService.getPostByID(this.postId).subscribe(data => {
            this.postResponse = data as Post;

            this._apiService.getPostComments(this.postId).subscribe(comments => {
                this.postResponse.activity = comments as Comments[];
            });
        });
    }

    replyToComment() {
        const currentDate = new Date();
        this._apiService.addComment(this.postId, {
            parent_id: this.toAddId,
            user: this.userName,
            date: currentDate.getFullYear() + '-' + (currentDate.getMonth() + 1) + '-' + currentDate.getDate(),
            content: this.addedComment
        }).subscribe(_ => {
            this.addedComment = '';
            this.toAddId = null;
            this.refreshPage();
        });
    }

    editComment() {
        const currentDate = new Date();
        this._apiService.updateComment(this.toEditId, {
            user: this.userName,
            content: this.editedComment,
            date: currentDate.getFullYear() + '-' + (currentDate.getMonth() + 1) + '-' + currentDate.getDate(),
        }).subscribe(_ => {
            this.editedComment = '';
            this.toEditId = null;
            this.refreshPage();
        });
    }

    setupEditComment(commentId, comment) {
        this.toEditId = commentId;
        this.editedComment = comment;
    }

    setupReplyComment(id) {
        this.toAddId = id;
        this.addedComment = '';
    }
}
