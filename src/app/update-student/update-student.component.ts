import { Component, OnInit } from '@angular/core';
import { StudentService } from '../services/student.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-update-student',
  templateUrl: './update-student.component.html',
  styleUrls: ['./update-student.component.css']
})
export class UpdateStudentComponent implements OnInit {
  student: any;
  constructor(private studentService: StudentService, private router: Router) {
    this.student = this.router.getCurrentNavigation()?.extras.state?.['studentData'] as any;
    if (!this.student) {
      alert("No student data found!");
      this.router.navigateByUrl("");
    }
  }

  ngOnInit() {
    this.loadStudentData();
  }
  updateStudentForm = new FormGroup({
    id : new FormControl(''),
    rollNo: new FormControl({value:'', disabled: true}),
    name: new FormControl(''),
    age: new FormControl(''),
    email: new FormControl(''),
    date: new FormControl(''),
    isMale: new FormControl({value:'', disabled: true}),
  })


  loadStudentData() {
    this.updateStudentForm.patchValue({
      id:this.student.id,
      rollNo: this.student.rollNo,
      name: this.student.name,
      age: this.student.age,
      email: this.student.email,
      date: this.student.date,
      isMale: this.student.isMale,
    });

    // Disable rollNo and gender fields so that they cannot be edited
    this.updateStudentForm.get('rollNo')?.disable();
    this.updateStudentForm.get('isMale')?.disable();
  }

  updateStudent() {
    const updatedStudent = {
      ...this.student, // Original student data
      ...this.updateStudentForm.getRawValue(), // Updated form values
      gender: this.updateStudentForm.value.isMale ? 'Male' : 'Female' // Map boolean back to gender string
    };
    console.log(updatedStudent);
    this.studentService.updateStudent(updatedStudent).subscribe(data=>{
      alert("Student updated successfully");
  
    })
  }
}
