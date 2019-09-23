import { Component, OnInit } from '@angular/core';
import { StudentService } from '../Service/student.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  studentId: number;
  compartmentOpen = false;


     firstName = 'dsdsdasdasd' ;

     lastName: string ;

     address: string;
     fatherName: string;
     motherName: string;

     nationalNumber: number;

     dateOfBirth: Date;
     photo: string;

     gender: string;
     mobileNumber: number;
     telephoneNumber: number;
     email: string;

  constructor(lastName: string) {this.lastName = lastName ;}

  ngOnInit() {

  }
}
