import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { StudentService } from '../services/student.service';
@Component({
  selector: 'app-student-header',
  templateUrl: './student-header.component.html',
  styleUrls: ['./student-header.component.css']
})
export class StudentHeaderComponent {

  constructor(private router:Router, private studentService:StudentService ) { }
  addStudent(){
    this.router.navigateByUrl("/add-student");
  }
  showAll(){
    this.router.navigateByUrl("");
  }
}
