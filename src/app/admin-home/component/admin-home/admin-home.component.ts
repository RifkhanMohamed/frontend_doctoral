import { Component, OnInit } from '@angular/core';
import { RegisterService } from 'src/app/register/service/register.service';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit{
  ngOnInit(): void {
    this.getRegisterStudents();
    this.getPreRegisterStudents();
    this.getPreSelectedStudents();
    this.getPreSelectedStudentsPass();
    this.getPreSelectedStudentsFail();
    this.getPreSelectedStudentsValidated();
    this.getPreSelectedStudentsRejected();
  }
  constructor(private registerService:RegisterService){}
  studentsCount:any;
  preRegisterStudensCount:any;
  preSelectedStudensCount:any;
  passStudents:any;
  failedStudents:any;
  thesisDirectorValidatedStudents:any;
  thesisDirectorRejectedStudents:any;
  structureManagerConfirmed:any;
  structureManagerRejected:any;
  getRegisterStudents(){
    this.registerService.getUserCount().subscribe((results)=>{
      this.studentsCount=results;
    });
  }

  getPreRegisterStudents(){
    this.registerService.getPreUserCount().subscribe((results)=>{
      this.preRegisterStudensCount=results;
    });
  }
  getPreSelectedStudents(){
    this.registerService.getPreSelectedStudents().subscribe((results)=>{
      this.preSelectedStudensCount=results;
    });
  }

  getPreSelectedStudentsPass(){
    this.registerService.getUserCountStatus('pass').subscribe((results)=>{
      this.passStudents=results;
    });
  }

  getPreSelectedStudentsFail(){
    this.registerService.getUserCountStatus('fail').subscribe((results)=>{
      this.failedStudents=results;
    });
  }

  getPreSelectedStudentsValidated(){
    this.registerService.getUserCountStatus('thesis_director_validated').subscribe((results)=>{
      this.thesisDirectorValidatedStudents=results;
    });
  }

  getPreSelectedStudentsRejected(){
    this.registerService.getUserCountStatus('thesis_director_rejected').subscribe((results)=>{
      this.thesisDirectorRejectedStudents=results;
    });
  }

  getPreSelectedStudentsStructureConfirmed(){
    this.registerService.getUserCountStatus('structure_manager_confirmed').subscribe((results)=>{
      this.thesisDirectorValidatedStudents=results;
    });
  }

  getPreSelectedStudentsStructureRejected(){
    this.registerService.getUserCountStatus('structure_manager_rejected').subscribe((results)=>{
      this.thesisDirectorRejectedStudents=results;
    });
  }
}
