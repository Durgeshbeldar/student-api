import { Component , ViewChild, afterNextRender } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTable } from '@angular/material/table';
import { StudentService } from '../services/student.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
studentsData : any= '';
totalStudents :number = 0;
pageNumber : number = 1;
pageSize : number = 5;
displayedColumns: string[] = ['position', 'name', 'rollNo', 'age','email', 'date','gender','update', 'delete'];
constructor(private studentService: StudentService){
  this.loadStudents();
  this.totalStudents = this.studentsData.length;
}
loadStudents() {
  this.studentService.getStudents().subscribe(data => {
    this.studentsData = data;
    if(this.studentsData.length === 0)
      alert('No students found');
  });
}
// Paginator Code 

}
