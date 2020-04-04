import {Component, Input, OnInit} from '@angular/core';
import {NgxNavigationWithDataComponent} from 'ngx-navigation-with-data';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent {
    focus;
    loginName;

    constructor(private navCtrl: NgxNavigationWithDataComponent) {
    }

    navHome() {
        this.navCtrl.navigate('posts', {name: this.loginName});
    }
}

