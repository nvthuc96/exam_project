import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { User} from "app/pages/user/user.model"

import { Observable } from "rxjs";

const API = "https://projectquizonline.herokuapp.com/api/users";

@Injectable({
  providedIn: "root"
})
export class UserService {
  API = "https://projectquizonline.herokuapp.com/api/users";
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

  getUsers() {
    return this.http.get(API );
  }

  getUserById(id: string): Observable<any> {
    return this.http.get(API + id);
  }
  public addUser(item, data): Observable<User> {
    return this.http.post<User>(
      this.API,
      JSON.stringify(data),
      this.httpOptions
    );
  }

  // deleteUser() {}
   // Delete Item By Id
   public deleteUser(id: any): Observable<any> {
    return this.http.delete(
      this.API + `/${id}`,
      this.httpHeader
    );
  }
}
