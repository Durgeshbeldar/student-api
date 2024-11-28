import { Component } from '@angular/core';
import { StudentService } from './services/student.service';
import { FormGroup, FormControl } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demo-app';
  studentData: any = '';
  constructor(private studentService: StudentService) {
    this.loadStudents();
  }
  loadStudents() {
    this.studentService.getStudents().subscribe(data => {
      this.studentData = data;
      console.log(this.studentData);
    });
  }

  newStudentForm = new FormGroup({
    rollNo: new FormControl(),
    name: new FormControl(),
    age: new FormControl(),
    email: new FormControl(),
    date: new FormControl(),
    isMale: new FormControl()
  })

  

  // Declared Array of Tasks 

  deleteStudent(id: any) {
    this.studentService.deleteStudent(id).subscribe(() => { this.loadStudents(); });
    this.loadStudents();
  }
  updateId: any;
  isShow: boolean = false;
  student: any;

  updateStudentForm = new FormGroup({
    rollNo: new FormControl({ value: '', disabled: true }),
    name: new FormControl(),
    age: new FormControl(),
    email: new FormControl(),
    date: new FormControl(),
    isMale: new FormControl()
  });

 
  update(id: any) {
    this.isShow = true;
    this.updateId = id;
    this.studentService.getStudentById(id).subscribe(data => { 
      this.student = data; 
      this.updateStudentForm.patchValue({
        rollNo: this.student.rollNo, // Automatically sets the value for rollNo
      name: this.student.name,
      age: this.student.age,
      email: this.student.email,
      date: this.student.date,
      isMale: this.student.isMale
      });
    });
  }
  setId() {
    this.isShow = false;
    this.student = null;
  }
  updateData() {

  }
  // Function To Get Data From Task Form Entered By User..
  submitData() {
    this.studentService.addStudent(this.newStudentForm.value).subscribe(data => {
      console.log(data);
    });
    this.loadStudents();
  }
}
