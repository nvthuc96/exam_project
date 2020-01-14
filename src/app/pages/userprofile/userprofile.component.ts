import { Component, OnInit } from '@angular/core';
// import { FormBuilder, Validators} from '@angular/forms';
// import { ROUTES} from '@angular/router';


@Component({
    selector: 'userprofile-cmp',
    moduleId: module.id,
    templateUrl: 'userprofile.component.html'
})

export class UserProfileComponent implements OnInit{
    userProfile =
      {account: "Thucnv",
        job: "Student"};
    constructor(){}
    ngOnInit(){
    }
}
