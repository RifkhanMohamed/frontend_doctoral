import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/login/service/login.service';
import { CourseService } from 'src/app/course/service/course.service';
import {Course} from './../../../course/model/course'
import { WishService } from 'src/app/wish/service/wish.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  constructor(private loginService:LoginService,private router: Router,  private courseService: CourseService,private wishService:WishService){
    this.getCourse();
    this.getWish();

  }

  courses:Course[]=[];
  wish: any=[];
  courseIds: any=[];
  ngOnInit(): void {


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

reDirect1(){
    this.router.navigate(['/wish']);
}


getWish(){
  this.wishService.wishGetByUser(JSON.parse(localStorage.getItem("user")|| '{}').email).subscribe((results)=>{
    this.wish=results;
    if(this.wish.length!=0){
      for(var i=0;i<this.wish.length;i++){
        this.courseIds.push(this.wish[i].course.id);
      }
      this.courses.forEach(course => {
        course.disabled = this.courseIds.includes(course.id);
        if(course.disabled){
          course.isEnroll="Enrolled"
        }
        else{
          course.isEnroll="Enroll Now"
        }
    });
    }
    else{
      this.courses.forEach(course => {
        course.disabled = false;
          course.isEnroll="Enroll Now"
    });
    }  
  });

}
}
