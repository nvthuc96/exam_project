import { Component, OnInit } from "@angular/core";
import { HttpClient} from "@angular/common/http";
// import { examService } from "app/services/exam.service";
import { FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: "exam-cmp",
  moduleId: module.id,
  templateUrl: "exam.component.html"
})
export class ExamComponent implements OnInit {
  exams : any = [];
  examList = [
    {
      stt: 1,
      name: "thuc",
      numbers: 10,
      time: 30
    },
    {
      stt: 2,
      name: "khanh",
      numbers: 20,
      time: 60
    }
  ];

  constructor() {}
  ngOnInit() {
    // this.examService.getexams().subscribe(data => {
    //   this.exams = data;
    // });
  }
}
