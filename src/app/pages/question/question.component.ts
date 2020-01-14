import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
import { FormBuilder, Validators } from "@angular/forms";
import { QuestionService } from "app/services/question.service";
import { Question } from './question.model';

@Component({
  selector: "Question-cmp",
  moduleId: module.id,
  templateUrl: "question.component.html"
})
export class QuestionComponent implements OnInit {
  data: Question;
  questions: any = [];
  // questionList = [
  //   {
  //     stt: 1,
  //     name: "What your name?",
  //     course: "thuc1",
  //     difficult: 3
  //   },
  //   {
  //     stt: 2,
  //     name: "How are you?",
  //     course: "khanh1",
  //     difficult: 5
  //   }
  // ];

  constructor(
    private questionService: QuestionService,
    private router: Router,
    private API: QuestionService
  ) {}

  ngOnInit() {
    this.questionService.getQuestions().subscribe(data => {
      this.questions = data;
    });
  }
  getQuestions() {
    this.questionService.getQuestions().subscribe(data => {
      this.questions = data;
    });
  }
  addQuestion() {
    this.router.navigate(["/add-question"]);
    this.questionService.addQuestion("question", this.data).subscribe(data => {
      this.questions = data;
    });
  }

  deleteQuestion(id: any) {
    // this.SpinnerService.show();
    this.API.deleteQuestion(id).subscribe(
      res => {
        console.log(res);
        this.getQuestions();
        // this.SpinnerService.hide();
      },
      error => {
        console.log(error);
        // this.SpinnerService.hide();
      }
    );
  }
}
