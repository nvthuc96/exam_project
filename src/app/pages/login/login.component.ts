import { Component, OnInit } from "@angular/core";
import { LoginService } from "app/services/login.service";

@Component({
  selector: "app-login",
  // selector: 'dashboard-cmp',
  moduleId: module.id,
  // templateUrl: 'dashboard.component.html'
  templateUrl: "login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  logins: any = [];

  constructor(private loginService: LoginService) {}
  ngOnInit() {
    this.loginService.getLogins().subscribe(data => {
      this.logins = data;
    });
  }
}
