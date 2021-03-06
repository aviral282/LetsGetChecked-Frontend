import {Component} from '@angular/core';
import {NgxNavigationWithDataComponent} from 'ngx-navigation-with-data';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {regexValidators} from '../providers/validator';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent {
    focus;
    formData: any = new FormData();
    loginForm: FormGroup;
    registerform: FormGroup;
    submitted = false;


    constructor(
        private navCtrl: NgxNavigationWithDataComponent,
        private formBuilder: FormBuilder,
    ) {
    }

    get f() {
        return this.loginForm.controls;
    }

    async ngOnInit() {

        this.loginForm = this.formBuilder.group({
            title: ['', [Validators.required, Validators.minLength(4)]],
            mobile: ['', Validators.required],
            email: ['', [Validators.compose([Validators.pattern(regexValidators.email), Validators.required, Validators.minLength(6), Validators.email])]],
        });
    }

    navHome() {
        if (this.loginForm.invalid) {
            this.submitted = true;
            return;
        }
        this.navCtrl.navigate('posts', {name: this.loginForm.controls['title'].value});
    }
}

