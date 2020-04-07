import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {PostComponent} from './post.component';
import {NgxNavigationWithDataComponent} from 'ngx-navigation-with-data';
import {RouterModule} from '@angular/router';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {RouterTestingModule} from '@angular/router/testing';

describe('PostComponent', () => {
    let component: PostComponent;
    let fixture: ComponentFixture<PostComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [PostComponent],
            imports: [
                HttpClientTestingModule,
                RouterTestingModule.withRoutes([]),
            ],
            providers: [
                NgxNavigationWithDataComponent,
                RouterModule
            ],
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(PostComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
