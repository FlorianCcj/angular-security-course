import {Component, OnInit} from '@angular/core';
import {LessonsService} from '../services/lessons.service';
import {Observable} from 'rxjs/Observable';
import {LessonModel} from '../model/lesson.model';
import {AuthService} from '../services/auth.service';

@Component({
    selector: 'app-lessons',
    templateUrl: './lessons.component.html',
    styleUrls: ['./lessons.component.css']
})
export class LessonsComponent implements OnInit {

    lessons$: Observable<LessonModel[]>;
    isLoggedIn$: Observable<boolean>;

    constructor(private lessonsService: LessonsService, private authService: AuthService) {

    }

    ngOnInit() {
        this.lessons$ = this.lessonsService.loadAllLessons().catch(err => Observable.of([]));
        this.isLoggedIn$ = this.authService.isLoggedIn$;
    }

}
