import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {RouterModule} from '@angular/router';
import {AppRoutingModule} from './app.routing';

import {AppComponent} from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import {NgxNavigationWithDataComponent} from 'ngx-navigation-with-data';
import {HttpClientModule} from '@angular/common/http';
import { PostComponent } from './post/post.component';

@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        HomeComponent,
        PostComponent
    ],
    imports: [
        BrowserModule,
        NgbModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule,
        AppRoutingModule,
        HttpClientModule
    ],
    providers: [
        NgxNavigationWithDataComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
