import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root'
})

export class ConfigService {

    public URL = 'https://lets-get-checked-backend.herokuapp.com/';

    constructor() {
    }
}
