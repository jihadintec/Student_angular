import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { BrowserModule } from '@angular/platform-browser';
import { StudentComponent } from './student/student.component';

const routes: Routes = [
  {path: 'welcome', component: WelcomeComponent},
  {path: 'student', component: StudentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
  BrowserModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
