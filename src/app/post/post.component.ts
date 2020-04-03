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

    userName = 'Amelia';
    postId = 1;

    toAddId;

    postResponse: Post = new Post();

    constructor(
        private navCtrl: NgxNavigationWithDataComponent,
        private _apiService: ApiService
    ) {
        // this.userName = navCtrl.get('name');
        // this.postId = navCtrl.get('id');


        // if (this.userName === undefined || this.postId === undefined) {
        //     navCtrl.navigate('');
        // }
    }

    ngOnInit(): void {
        this._apiService.getPostByID(this.postId).subscribe(data => {
            this.postResponse = data as Post;

            this._apiService.getPostComments(this.postId).subscribe(comments => {
                this.postResponse.activity = comments as Comments[];
                console.log(comments);
            });
        });
    }

    replyToComment() {

    }

    editComment(commentId) {

    }

    setupComment(id) {
        this.toAddId = id;
    }
}
