import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
// import { RouterLink } from "@angular/router";
import { Router  } from "@angular/router";
@Component({
  selector: "app-add-user",
  templateUrl: "./adduser.component.html",
  // styleUrls: ["./add-user.component.css"]
})
export class AddUserComponent implements OnInit {
  userForm = this.fb.group({
    account: ['', Validators.required],
    // lastNampa: [''],
    password: ['', [Validators.required]],
    // address: [''],
  });

  constructor(private fb: FormBuilder,
    public router: Router
    ) {}

  ngOnInit() {}

  addUser() {
    console.log(this.userForm.value);
    this.router.navigate(['/user']);
  }
}

