import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Course } from '../models/course.model';
import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  public API : string = 'http://localhost:3000/courses';

  constructor(public http: HttpClient) { }

  getAll() : Observable<Course[]> {
    return this.http.get<Course[]>(this.API)
  }

  addCourse(course : Course) : Observable<Course>{
    return this.http.post<Course>(this.API, course);
  }
  getCourse(id: number) : Observable<Course>{
    return this.http.get<Course>(`${this.API}/${id}`);
  }

  updateCourse(course : Course) :Observable<Course>{
    return this.http.put<Course>(`${this.API}/${course.id}`, course);
  }

  deleteCourse(id: number) : Observable<Course>{
    return this.http.delete<Course>(`${this.API}/${id}`);
  }
}
