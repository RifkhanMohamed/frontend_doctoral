import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/login/service/login.service';
import { CourseService } from 'src/app/course/service/course.service';
import {Course} from './../../../course/model/course'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  constructor(private loginService:LoginService,private router: Router,  private courseService: CourseService){
  }

  courses:Course[]=[];

  ngOnInit(): void {
    this.getCourse();
  }

  getCourse(){
    this.courseService.getCourse().subscribe((results)=>{
      this.courses=results;
    })
  }
  

isLoggedIn(){
  return this.loginService.isLoggedIn();
}

reDirect(course:any){
  if(this.isLoggedIn()){
    this.router.navigate(['/wish'],{ queryParams: { course: course } });
  }
  else{
    this.router.navigate(['/login']);
  }
}
}
