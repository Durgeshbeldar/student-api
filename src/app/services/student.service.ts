import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class StudentService {

  url = 'http://gsmktg.azurewebsites.net/api/v1/techlabs/test/students';

  constructor(private http:HttpClient) { }
  getStudents(){
    return this.http.get(this.url);
  }
  getStudentById(id:any){
    return this.http.get(this.url+"/"+id);
  }
  updateStudent(studentData:any){
    return this.http.put(this.url+"/"+studentData.id,studentData);
  }
  addStudent(newStudentData:any){
    return this.http.post(this.url,newStudentData);
  }
  deleteStudent(id:any){
    return this.http.delete(this.url+"/"+id);
  }
}
