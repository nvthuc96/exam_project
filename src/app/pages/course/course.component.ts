import { Component, OnInit } from "@angular/core";
import { CourseService } from "app/services/course.service";
import { NgxSpinnerService } from "ngx-spinner";
import { Router } from "@angular/router";
import { FormBuilder, Validators } from "@angular/forms";
import { MatSelectModule } from "@angular/material/select";
import { Course} from "app/pages/course/course.model";

@Component({
  selector: "course-cmp",
  moduleId: module.id,
  templateUrl: "course.component.html"
  // schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class CourseComponent implements OnInit {
  data: Course;
  courses: any = [];

  constructor(
    private courseService: CourseService,
    private router: Router,
    private API: CourseService,
    private spinner: NgxSpinnerService
  ) {}
  ngOnInit() {
    this.courseService.getCourses().subscribe(data => {
      this.courses = data;
    });
  }
  // getCourses() {
  //   this.API.getCourses().subscribe(
  //     res => {
  //       console.log(res.data);
  //       this.courses = res.data;
  //     },
  //     error => {
  //       console.log(error);
  //     }
  //   );
  // }
  getCourses() {
    this.courseService.getCourses().subscribe(data => {
      this.courses = data;
    });
  }
  addCourse() {
    this.router.navigate(["/addcourse"]);
    this.courseService.addCourse("course", this.data).subscribe(data => {
      this.courses = data;
    });
  }

  deleteCourse(id: any) {
    // this.SpinnerService.show();
    this.API.deleteCourse(id).subscribe(
      res => {
        console.log(res);
        this.getCourses();
        // this.SpinnerService.hide();
      },
      error => {
        console.log(error);
        // this.SpinnerService.hide();
      }
    );
  }
}
