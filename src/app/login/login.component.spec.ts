import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {LoginComponent} from './login.component';
import {NgxNavigationWithDataComponent} from 'ngx-navigation-with-data';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {RouterTestingModule} from '@angular/router/testing';

describe('LoginComponent', () => {
    let component: LoginComponent;
    let fixture: ComponentFixture<LoginComponent>;
    let navCtrl: NgxNavigationWithDataComponent;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [LoginComponent],
            imports: [
                HttpClientTestingModule,
                RouterTestingModule.withRoutes([]),
                FormsModule,
                ReactiveFormsModule
            ],
            providers: [
                NgxNavigationWithDataComponent,
                RouterModule
            ],
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(LoginComponent);
        navCtrl = TestBed.get(NgxNavigationWithDataComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('check Login', () => {
        const navigationSpy = spyOn(navCtrl, 'navigate');

        component.loginForm.setValue({
            title: 'Aviral',
            mobile: '+353891312312',
            email: 'asdasd@gmail.com'
        });

        component.navHome();
        expect(navigationSpy).toHaveBeenCalledWith('posts', {name: 'Aviral'});
    });
});
