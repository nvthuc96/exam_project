import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
// import { RouterLink } from "@angular/router";
// import { Routes  } from "@angular/router";
@Component({
  selector: "app-edit-course",
  templateUrl: "./edit-course.component.html"
  // styleUrls: ["./add-user.component.css"]
})
export class EditCourseComponent implements OnInit {
  courseForm = this.fb.group({
    name: ["", Validators.required],
    // lastNampa: [''],
    number: ["", [Validators.required]],
    time: [""]
  });

  constructor(private fb: FormBuilder) {}

  ngOnInit() {}

  editCourse() {
    console.log(this.courseForm);
  }
}
