import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
// import { RouterLink } from "@angular/router";
// import { Routes  } from "@angular/router";
@Component({
  selector: "app-edit-question",
  templateUrl: "./edit-question.component.html"
  // styleUrls: ["./edit-user.component.css"]
})
export class EditQuestionComponent implements OnInit {
  questionForm = this.fb.group({
    name: ["", Validators.required],
    // lastNampa: [''],
    course: ["", [Validators.required]],
    difficult: [""]
  });

  constructor(private fb: FormBuilder) {}

  ngOnInit() {}

  editQuestion() {
    console.log(this.questionForm.value);
  }
}
