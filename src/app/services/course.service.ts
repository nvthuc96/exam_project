import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Course} from "app/pages/course/course.model"
import { Observable } from "rxjs";

const API = "https://projectquizonline.herokuapp.com/api/courses";

@Injectable({
  providedIn: "root"
})
export class CourseService {
  API = "https://projectquizonline.herokuapp.com/api/courses";
   // Http Options
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
  getCourses() {
    return this.http.get(API);
  }

  getCourseById(id: string): Observable<any> {
    return this.http.get(API + id);
  }
  // public getCourseDetail(id): Observable<any> {
  //   return this.httpClient.get<any>(
  //     this.apiURL + 'Course/' + id,
  //     this.httpHeader
  //   );
  // }
  // Create a new item
  public addCourse(item, data): Observable<Course> {
    return this.http.post<Course>(
      this.API,
      JSON.stringify(data),
      this.httpOptions
    );
  }

  // deleteCourse() {}
   // Delete Item By Id
   public deleteCourse(id: any): Observable<any> {
    return this.http.delete(
      this.API + `/${id}`,
      this.httpHeader
    );
  }
}
