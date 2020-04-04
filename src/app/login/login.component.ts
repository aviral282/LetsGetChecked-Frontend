import { Component, Input, OnInit } from '@angular/core';
import { NgxNavigationWithDataComponent } from 'ngx-navigation-with-data';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent {
    focus;
    formData: any = new FormData();
    loginForm: FormGroup;


    constructor(
        private navCtrl: NgxNavigationWithDataComponent,
        private formBuilder: FormBuilder,
    ) {
    }

    async ngOnInit() {

        this.loginForm = this.formBuilder.group({
            title: ['', [Validators.required, Validators.minLength(4)]],
        });
    }



    navHome() {
        if (this.loginForm.invalid) {
            return;
        }
        this.navCtrl.navigate('posts', { name: this.loginForm.controls['title'].value });
    }
}

