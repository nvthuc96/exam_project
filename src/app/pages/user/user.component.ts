import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";

import { UserService } from 'app/services/user.service';

@Component({
  selector: "app-user",
  templateUrl: "./user.component.html"
  // styleUrls: ["./users.component.css"]
})
export class UsersComponent implements OnInit {
  users: any = [];

  constructor(private userService: UserService,
    private router: Router,
    private API: UserService,) {}

  ngOnInit() {
    this.userService.getUsers().subscribe(data => {
      this.users = data;
    });
  }
  getUsers() {
    this.userService.getUsers().subscribe(data => {
      this.users = data;
    })
  }
  toCreateUser() {
    this.router.navigate([""]);
  }

  deleteUser(id: any) {
    // this.SpinnerService.show();
    this.API.deleteUser(id).subscribe(
      res => {
        console.log(res);
        this.getUsers();
        // this.SpinnerService.hide();
      },
      error => {
        console.log(error);
        // this.SpinnerService.hide();
      }
    );
  }
}
