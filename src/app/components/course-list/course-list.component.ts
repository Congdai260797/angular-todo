import { Component, OnInit, OnDestroy } from '@angular/core';
import { CourseService } from 'src/app/services/course.service';
import { Subscription } from 'rxjs';
import { Course } from 'src/app/models/course.model';


@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss']
})
export class CourseListComponent implements OnInit, OnDestroy {

  public subscription : Subscription;
  public courses : Course[] = [];

  constructor( public courseService : CourseService ) { }

  ngOnInit(): void {
    this.subscription = this.courseService.getAll().subscribe((data: Course[]) => {
      this.courses = data;
    });
  }

  ngOnDestroy(){
    if(this.subscription){
      this.subscription.unsubscribe();
    }
  }

  edit(){

  }
  deleteCourse(id: number){
    this.subscription = this.courseService.deleteCourse(id).subscribe((data: Course) => {
     this.updateDataAfterDelete(id);
    });
  }
  updateDataAfterDelete(id: number){
    for(var i = 0; i < this.courses.length; i++){
      if(this.courses[i].id == id){
        this.courses.splice(i, 1);
        break;
      }
    }
  }
}
