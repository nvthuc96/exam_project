import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
// import { RouterLink } from "@angular/router";
// import { Routes  } from "@angular/router";
@Component({
  selector: "app-edit-user",
  templateUrl: "./edituser.component.html",
  // styleUrls: ["./add-user.component.css"]
})
export class EditUserComponent implements OnInit {
  userForm = this.fb.group({
    account: ['', Validators.required],
    // lastName: [''],
    password: ['', [Validators.required]],
    // address: [''],
  });

  constructor(private fb: FormBuilder,
    ) {}

  ngOnInit() {}

  addUser() {
    console.log(this.userForm)
  }
}

