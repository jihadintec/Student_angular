import { Component, OnInit } from '@angular/core';
import { StudentService } from '../Service/student.service';
import { StudentComponent } from '../student/student.component';

@Component({
  selector: 'app-viewstudent',
  templateUrl: './viewstudent.component.html',
  styleUrls: ['./viewstudent.component.css']
})
export class ViewstudentComponent implements OnInit {
  Student: Array<StudentComponent> = [];
  constructor(private service: StudentService) { }

  ngOnInit() {
    this.viewStudentList();
  }
  viewStudentList(): any {
    this.service.viewStudentList()
    .then(Response => {
      this.Student = Response;
      })
  }
}
