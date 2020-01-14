import { Routes } from "@angular/router";

import { DashboardComponent } from "../../pages/dashboard/dashboard.component";
import { UserManagementComponent } from "../../pages/usermanagement/usermanagement.component";
import { QuestionComponent } from "../../pages/question/question.component";
import { ExamComponent } from "../../pages/exam/exam.component";
// import { MapsComponent } from '../../pages/maps/maps.component';
import { CourseComponent } from "../../pages/course/course.component";
import { UpgradeComponent } from "../../pages/upgrade/upgrade.component";
import { AddUserComponent } from "../../pages/adduser/adduser.component";
import { EditUserComponent } from "app/pages/edituser/edituser.component";
import { AddCourseComponent } from "../../pages/add-course/add-course.component";
import { EditCourseComponent } from "app/pages/edit-course/edit-course.component";

import { AddQuestionComponent } from "../../pages/add-question/add-question.component";
import { EditQuestionComponent } from "app/pages/edit-question/edit-question.component";
import { UserProfileComponent } from "../../pages/userprofile/userprofile.component";

export const AdminLayoutRoutes: Routes = [
  { path: "dashboard", component: DashboardComponent },
  { path: "user", component: UserManagementComponent },
  { path: "question", component: QuestionComponent },
  { path: "exam", component: ExamComponent },
  // { path: 'maps',           component: MapsComponent },
  { path: "course", component: CourseComponent },
  { path: "login", component: UpgradeComponent },
  { path: "adduser", component: AddUserComponent },
  { path: "edituser", component: EditUserComponent },
  { path: "addcourse", component: AddCourseComponent },
  { path: "editcourse", component: EditCourseComponent },

  { path: "add-question", component: AddQuestionComponent },
  { path: "edit-question", component: EditQuestionComponent },
  {
    path: "userprofile",
    component: UserProfileComponent
  }
];
