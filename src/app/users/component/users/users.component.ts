import { Component, OnInit } from '@angular/core';
import { RegisterService } from 'src/app/register/service/register.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit{
  ngOnInit(): void {
    this.getAllStudents();
  }
  key: string='id';
  reverse:boolean=false;
  p:number=1;

  constructor(private registerService:RegisterService){}
  students:any;
  getAllStudents(){
    this.registerService.getAllStudents().subscribe((results)=>{
      this.students=results;
    });
  }

  sort(key: any){
    this.key=key;
    this.reverse=!this.reverse;
  }

}
