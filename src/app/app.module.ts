import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CourseAddComponent } from './components/course-add/course-add.component';
import { CourseListComponent } from './components/course-list/course-list.component';
import { CourseEditComponent } from './components/course-edit/course-edit.component';
import { CourseComponent } from './components/course/course.component';
import { CourseService } from './services/course.service';

const appRoutes :Routes = [
  {
    path : 'courses',
    component : CourseComponent,
    children : [
      {
        path : '',
        component : CourseListComponent
      },
      {
        path : 'edit/:id',
        component : CourseEditComponent
      },
      {
        path : 'add',
        component : CourseAddComponent
      }
    ]
  }
]

@NgModule({
  declarations: [
    AppComponent,
    CourseAddComponent,
    CourseListComponent,
    CourseEditComponent,
    CourseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    CourseService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
