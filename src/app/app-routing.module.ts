import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SomethingElseComponent } from './components/something-else/something-else.component';
import { StudentDetailsComponent } from './components/student-details/student-details.component';
import { StudentsComponent } from './components/students/students.component';
import { StudentDetailGuard } from './guard/student-detail.guard';

const routes: Routes = [
  { path: '', redirectTo: '/students', pathMatch: 'full' },
  { path: 'students', component: StudentsComponent },
  { path: 'student-details/:id/:isCool', component: StudentDetailsComponent, canActivate: [StudentDetailGuard] },
  { path: 'something-else', component: SomethingElseComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
