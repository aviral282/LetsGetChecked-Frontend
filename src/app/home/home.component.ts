import {Component, OnInit} from '@angular/core';
import {NgxNavigationWithDataComponent} from 'ngx-navigation-with-data';
import {ApiService} from '../providers/api.service';
import {Post} from '../data/post';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    userName;
    allPosts: Post[] = [];

    constructor(
        private navCtrl: NgxNavigationWithDataComponent,
        private _apiService: ApiService
    ) {
        this.userName = navCtrl.get('name');

        if (this.userName === undefined) {
            navCtrl.navigate('');
        }
    }

    ngOnInit(): void {
        this.getAllPosts();
    }

    private async getAllPosts() {
        await this._apiService.getAllPosts().subscribe(data => {
            (data as Post[]).forEach(post => {
                post.publish_day = this.getPublishDate(post).getDay();
                post.publish_month = new Intl.DateTimeFormat('en-US', {month: 'short'}).format(this.getPublishDate(post));
                this.allPosts.push(post);
            });
            this.allPosts.sort((a, b) => this.dateDiffFromNow(a) - this.dateDiffFromNow(b));
        });
    }

    getPublishDate(post: Post) {
        const parts = post.publish_date.split('-');
        return new Date(parts[0], parts[1] - 1, parts[2]);
    }

    dateDiffFromNow(post) {
        const postDate = this.getPublishDate(post);
        const currentDate = new Date();
        // @ts-ignore
        return Math.floor((currentDate - postDate) / (1000 * 60 * 60 * 24));
    }

    openPost(id) {
        this.navCtrl.navigate('post', {id: id, name: this.userName});
    }
}
