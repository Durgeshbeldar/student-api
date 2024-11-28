import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { StudentService } from '../services/student.service';
@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent {
  constructor(private studentService: StudentService) { }
  newStudentForm = new FormGroup({
    rollNo: new FormControl(),
    name: new FormControl(),
    age: new FormControl(),
    email: new FormControl(),
    date: new FormControl(),
    isMale: new FormControl()
  })
  submitData() {
    this.studentService.addStudent(this.newStudentForm.value).subscribe(data => {
      console.log(data);
    });
  }
}
