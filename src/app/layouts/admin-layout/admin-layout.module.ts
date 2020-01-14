import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AdminLayoutRoutes } from "./admin-layout.routing";

import { DashboardComponent } from "../../pages/dashboard/dashboard.component";
import { UserManagementComponent } from "../../pages/usermanagement/usermanagement.component";
import { QuestionComponent } from "../../pages/question/question.component";
import { ExamComponent } from "../../pages/exam/exam.component";
// import { MapsComponent }            from '../../pages/maps/maps.component';
import { CourseComponent } from "../../pages/course/course.component";
import { UpgradeComponent } from "../../pages/upgrade/upgrade.component";
import { AddUserComponent } from "../../pages/adduser/adduser.component";
import { EditUserComponent} from "../../pages/edituser/edituser.component";
import { AddCourseComponent } from "../../pages/add-course/add-course.component";
import { EditCourseComponent } from "app/pages/edit-course/edit-course.component";

import { AddQuestionComponent } from "../../pages/add-question/add-question.component";
import { EditQuestionComponent } from "app/pages/edit-question/edit-question.component";
import { UserProfileComponent } from '../../pages/userprofile/userprofile.component';
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    NgbModule,
    ReactiveFormsModule,
  ],
  declarations: [
    DashboardComponent,
    UserManagementComponent,
    QuestionComponent,
    UpgradeComponent,
    ExamComponent,
    // MapsComponent,
    CourseComponent,
    AddUserComponent,
    EditUserComponent,
    UserProfileComponent,
    AddCourseComponent,
    EditCourseComponent,

    AddQuestionComponent,
    EditQuestionComponent
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]

})
export class AdminLayoutModule {}
