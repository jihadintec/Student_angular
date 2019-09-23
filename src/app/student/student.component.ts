import { Component, OnInit } from '@angular/core';
import { StudentService } from '../Service/student.service';
import { Studentclass } from '../studentclass';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
studentclass: Studentclass[];
  constructor (private service: StudentService){

  }
  ngOnInit(): void {
    this.service.findAll().subscribe(data => {this.studentclass = data; });
    throw new Error("Method not implemented.");
  }
  public findAll(){
    this.service.findAll().subscribe(data => {this.studentclass = data; });
  }
  // studentId: number;
  // firstName: string ;

  // lastName: string ;

  // address: string;
  // fatherName: string;
  // motherName: string;

  // nationalNumber: number;

  // dateOfBirth: Date;
  // photo: string;

  // gender: string;
  // mobileNumber: number;
  // telephoneNumber: number;
  // email: string;


  //   Student: Array<StudentComponent> = [];
  //   constructor(private service: StudentService,
  //               firstname,
  //               lastName,
  //               address,
  //               fatherName,
  //               motherName,
  //               nationalNumber,
  //               dateOfBirth,
  //               photo,
  //               gender,
  //               mobileNumber,
  //               telephoneNumber,
  //               email
  //       ) { this.firstName = firstname;
  //           this.lastName = lastName;
  //           this.address = address;
  //           this.fatherName = fatherName;
  //           this.motherName = motherName;

  //           this.nationalNumber = nationalNumber;

  //           this.dateOfBirth = dateOfBirth;
  //           this.photo = photo;

  //           this.gender = gender;
  //           this.mobileNumber = mobileNumber;
  //           this.telephoneNumber = telephoneNumber;
  //           this.email = email;}

  //           ngOnInit() {
  //     this.viewStudentList();
  //   }
  //           viewStudentList(): any {
  //    return this.service.viewStudentList()
  //     .then(Response => {
  //       this.Student = Response;
  //       })
  //   }
  }
