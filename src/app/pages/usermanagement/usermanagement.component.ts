import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";

import { UserService } from 'app/services/user.service';
import { User } from '../user/user.model';


@Component({
  selector: "usermanagement-cmp",
  moduleId: module.id,
  templateUrl: "usermanagement.component.html"
})
export class UserManagementComponent implements OnInit {
  data: User;
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
  addUser() {
    this.router.navigate(["/adduser"]);
    this.userService.addUser("user", this.data).subscribe(data => {
      this.users = data;
    });
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
