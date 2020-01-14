import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
// import { RouterLink } from "@angular/router";
import { Router  } from "@angular/router";
@Component({
  selector: "app-add-question",
  templateUrl: "./add-question.component.html"
  // styleUrls: ["./add-user.component.css"]
})
export class AddQuestionComponent implements OnInit {
  questionForm = this.fb.group({
    name: ["", Validators.required],
    // lastNampa: [''],
    course: ["", [Validators.required]],
    difficult: [""]
  });

  constructor(private fb: FormBuilder,
    public router: Router) {}

  ngOnInit() {}

  addQuestion() {
    console.log(this.questionForm.value);
    this.router.navigate(['/question']);
  }
}
