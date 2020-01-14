import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

const API = "https://projectquizonline.herokuapp.com/login";

@Injectable({
  providedIn: "root"
})
export class LoginService {
  constructor(private http: HttpClient) {}

  getLogins() {
    return this.http.get(API );
  }

  getLoginById(id: string): Observable<any> {
    return this.http.get(API  + id);
  }

  deleteLogin() {}
}
