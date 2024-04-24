import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environment/environment';
import {Course} from './../model/course'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CourseService {
  headers = new HttpHeaders().set('Content-Type','application/json').set('Accept','application/json');
  httpOptions={
    headers:this.headers
  }

  constructor(private http:HttpClient) { }

  base_url=environment.api;

  getCourse(){
    return this.http.get<Course[]>(this.base_url+"course/get");
  }

  saveCourse(data:any): Observable<Course> {
    return this.http.post<Course>(this.base_url+"course/create",data);
  }
}
