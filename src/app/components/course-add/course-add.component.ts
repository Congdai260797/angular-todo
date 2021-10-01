import { Component, OnInit, OnDestroy } from '@angular/core';
import { CourseService } from 'src/app/services/course.service';
import { Subscription } from 'rxjs';
import { Course } from 'src/app/models/course.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-course-add',
  templateUrl: './course-add.component.html',
  styleUrls: ['./course-add.component.scss']
})
export class CourseAddComponent implements OnInit, OnDestroy {

  public subscription : Subscription;
  public course : Course;

  constructor(
    public courseService : CourseService,
    public routerService : Router
    ) { }

  ngOnInit(): void {
    this.course = new Course();
  }

  onAddCourse(){
    this.subscription = this.courseService.addCourse(this.course).subscribe(data => {
    if(data && data.id){
      this.routerService.navigate(['courses']);
    }
    });
  }

  ngOnDestroy(){
    if(this.subscription){
      this.subscription.unsubscribe();
    }
  }
}
