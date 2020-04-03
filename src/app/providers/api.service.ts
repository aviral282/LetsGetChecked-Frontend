import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ConfigService} from './config.service';

@Injectable({
    providedIn: 'root'
})
export class ApiService {

    constructor(
        private http: HttpClient,
        private readonly _configService: ConfigService,
    ) {
    }

    getAllPosts() {
        return this.http.get(this._configService.URL + 'posts');
    }

    getPostByID(id) {
        return this.http.get(this._configService.URL + 'posts/' + id);
    }

    getPostComments(id) {
        return this.http.get(this._configService.URL + 'posts/' + id + '/comments');
    }

    addComment(id, data) {
        return this.http.post(this._configService.URL + 'posts/' + id + '/comments', data);
    }

    updateComment(id, data) {
        return this.http.put(this._configService.URL + 'comments/' + id, data);
    }
}
