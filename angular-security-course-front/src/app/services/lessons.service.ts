
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {LessonModel} from '../model/lesson.model';
import {Observable} from 'rxjs/Observable';


@Injectable()
export class LessonsService {

    constructor(private http: HttpClient) {

    }

    loadAllLessons(): Observable<LessonModel[]> {
        return this.http.get<any>('/api/lessons')
            .map(res => res.lessons);
    }

    findLessonById(id: number) {
        return this.http.get<LessonModel>('/api/lessons/' + id);
    }

}

