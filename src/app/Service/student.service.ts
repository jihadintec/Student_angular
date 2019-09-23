import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StudentService {


constructor(private http: HttpClient
  ) { }
  excutestudentList() {
    return this.http.get('http://localhost:8080/showme');
  }
  viewStudentList() {
    // tslint:disable-next-line:no-unused-expression
    this.excutestudentList() .toPromise()
    .then(this.handelresponse);
    // .subscribe(
    //   response => this.handelresponse(response));
    }
    handelresponse(response): Promise<any> {
// this.Students = response;
    //  this.studentId = response.studentId;
    //  this.lastName = response.lastName;
    //  this.address = response.address;
    //  this.fatherName = response.fatherName;
    //  this.motherName = response.motherName;
    //  this.nationalNumber = response.nationalNumber;
    //  this.photo = response.photo;
    //  this.gender = response.gender;
    //  this.mobileNumber = response.mobileNumber;
    //  this.telephoneNumber = response.telephoneNumber;
    //  this.email = response.email;
    //  console.log(response);
    return Promise.resolve(console.log(response.email));
    }
}




