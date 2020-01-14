import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-course-detail",
  templateUrl: "./course-detail.component.html",
  // styleUrls: ["./user-detail.component.css"]
})
export class CourseDetailComponent implements OnInit {
  courseId: string = "";

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.courseId = this.activatedRoute.snapshot.paramMap.get("id");
  }
}
