import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Question} from "app/pages/question/question.model"

import { Observable } from "rxjs";

const API = "https://projectquizonline.herokuapp.com/api/ques";

@Injectable({
  providedIn: "root"
})
export class QuestionService {
  API = "https://projectquizonline.herokuapp.com/api/ques";
  httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json",
      Accept: "application/json"
    })
  };
  httpHeader = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private http: HttpClient) {}

  getQuestions() {
    return this.http.get(API );
  }

  getQuestionById(id: string): Observable<any> {
    return this.http.get(API + id);
  }
  public addQuestion(item, data): Observable<Question> {
    return this.http.post<Question>(
      this.API,
      JSON.stringify(data),
      this.httpOptions
    );
  }

  // deleteQuestion() {}
   // Delete Item By Id
   public deleteQuestion(id: any): Observable<any> {
    return this.http.delete(
      this.API + `/${id}`,
      this.httpHeader
    );
  }
}
