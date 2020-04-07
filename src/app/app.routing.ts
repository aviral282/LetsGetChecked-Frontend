import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {HomeComponent} from './home/home.component';
import {PostComponent} from './post/post.component';

const routes: Routes = [
    // { path: '',             component: AppComponent },
    {path: 'posts', component: HomeComponent},
    {path: 'post', component: PostComponent},
    // { path: 'landing',          component: LandingComponent },
    // { path: 'login',          component: LoginComponent },
    // {path: '', redirectTo: 'home', pathMatch: 'full'}
    {path: '', component: LoginComponent}
];

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        RouterModule.forRoot(routes, {
            useHash: true
        })
    ],
    exports: [],
})
export class AppRoutingModule {
}
