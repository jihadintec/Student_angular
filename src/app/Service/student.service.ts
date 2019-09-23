import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Studentclass } from '../studentclass';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {


  private usersUrl: string;

  constructor(private http: HttpClient) {
  }

 findAll(): Observable<Studentclass[]> {
    return this.http.get<Studentclass[]>('http://localhost:8080/showme');
  }

save(studentclass: Studentclass) {
    return this.http.post<Studentclass>(this.usersUrl, studentclass);
  }
  // public excutestudentList() {
  //   return this.http.get<Studentclass>('http://localhost:8080/showme');
  // }
  // public viewStudentList() {
  //   this.excutestudentList()
  //   .subscribe(
  //     response => this.handelresponse(response));
  //   }
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
    return Promise.resolve(response);
    }
}




