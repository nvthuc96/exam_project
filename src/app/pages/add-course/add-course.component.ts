import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { CourseService } from "app/services/course.service";
import { Course} from "app/pages/course/course.model";
import { Router } from "@angular/router";

// import { RouterLink } from "@angular/router";
// import { Routes  } from "@angular/router";
export interface Time {
  value: string;
  viewValue: string;
}
@Component({
  selector: "app-add-course",
  templateUrl: "./add-course.component.html"
  // styleUrls: ["./add-user.component.css"]
})

export class AddCourseComponent implements OnInit {
  API = "https://projectquizonline.herokuapp.com/api/courses";
  data: Course;
  courseForm = this.fb.group({
    name: ["", Validators.required],
    // lastNampa: [''],
    numbers: ["", [Validators.required]],
    time: [""]
  });
  selectedValue: string;
  // times: Time[]=[
  //   {value:'30-1', viewValue:'30'},
  //   {value:'60-1', viewValue:'60'},
  //   {value:'90-1', viewValue:'90'}
  // ];

  constructor(private fb: FormBuilder,
    public apiService: CourseService,
    public router: Router
    ) {
      this.data = new Course();
    }

  ngOnInit() {}

  addCourse() {
    console.log(this.courseForm.value);
    this.router.navigate(['/course']);
  }

}
