import { Component, OnInit, OnDestroy } from '@angular/core';
import { CourseService } from 'src/app/services/course.service';
import { Subscription } from 'rxjs';
import { Course } from 'src/app/models/course.model';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-course-edit',
  templateUrl: './course-edit.component.html',
  styleUrls: ['./course-edit.component.scss']
})
export class CourseEditComponent implements OnInit {

  public subscription : Subscription;
  public subscriptionParam : Subscription;
  public course : Course;

  constructor(
    public courseService : CourseService,
    public routerService : Router,
    public activateRouteService : ActivatedRoute
    ) { }

    ngOnInit(): void {
      this.course = new Course();
    }
    loadData(){
      this.subscriptionParam = this.activateRouteService.params.subscribe((data : Params) => {
      let id = data['id'];
       this.subscription = this.courseService.getCourse(id).subscribe((course : Course) => {
          this.course = course;
       });
      });
    }
    onEdit(){
        this.subscription = this.courseService.updateCourse(this.course).subscribe((course : Course) => {
          this.course = course;
       });
    }

    ngOnDestroy(){
      if(this.subscription){
        this.subscription.unsubscribe();
      }
      if(this.subscriptionParam){
        this.subscriptionParam.unsubscribe();
      }
    }

}
