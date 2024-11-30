import { Component , ViewChild} from '@angular/core';
import { StudentService } from '../services/student.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router , NavigationExtras} from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
//studentsData : any= '';
studentsData = new MatTableDataSource<any>([]);
totalStudents :number = 0;
pageNumber : number = 1;
pageSize : number = 5;
@ViewChild(MatPaginator) paginator!: MatPaginator;

displayedColumns: string[] = ['position', 'name', 'rollNo', 'age','email', 'date','gender','update', 'delete'];
constructor(private studentService: StudentService, private router: Router){
  this.loadStudents();
}
loadStudents() {
  this.studentService.getStudents().subscribe((data: any) => {
    this.studentsData.data = data; // Assign data to MatTableDataSource
    this.totalStudents = data.length; // Set total student count for paginator
  });
}

updateStudent(element: any) {
  this.router.navigateByUrl('update-student', { state: { studentData: element } });
}
deleteStudent(id: any) {
  const confirmDelete = window.confirm('Are you sure you want to delete this student?');
  if (confirmDelete) {
    this.studentService.deleteStudent(id).subscribe(() => {
      alert('Student deleted successfully');
      this.loadStudents();
    });
  }
}
// Paginator Code 
ngAfterViewInit() {
  this.studentsData.paginator = this.paginator; // Attach paginator after view initialization
}

}
