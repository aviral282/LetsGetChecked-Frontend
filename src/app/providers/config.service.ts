import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root'
})

export class ConfigService {

    constructor() {
    }

    public URL = 'http://lets-get-checked-backend.herokuapp.com/';
}
