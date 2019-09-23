import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { WelcomeComponent } from './welcome/welcome.component';
import {HttpClientModule } from '@angular/common/http';
import { StudentComponent } from './student/student.component';
import { ViewstudentComponent } from './viewstudent/viewstudent.component';



@NgModule({
   declarations: [
      AppComponent,
      HeaderComponent,
      FooterComponent,
      WelcomeComponent,
      StudentComponent,
      ViewstudentComponent
   ],
   imports: [
      BrowserModule,
      HttpClientModule,
      AppRoutingModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
