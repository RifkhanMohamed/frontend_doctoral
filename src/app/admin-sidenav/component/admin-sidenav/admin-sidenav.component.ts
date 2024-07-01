import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-admin-sidenav',
  templateUrl: './admin-sidenav.component.html',
  styleUrls: ['./admin-sidenav.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AdminSidenavComponent implements OnInit{
  ngOnInit(): void {
  }
  isCommittee=false;
  isSuperAdmin=false;
  isThesisDirector=false;
  isStructureManager=false;
  constructor(){
    if(JSON.parse(localStorage.getItem("user")|| '{}').role[0].role_name=="committee"){
      this.isCommittee=true;
    }
    else{
      this.isCommittee=false;
    }
    if(JSON.parse(localStorage.getItem("user")|| '{}').role[0].role_name=="super_admin"){
      this.isSuperAdmin=true;
    }
    else{
      this.isSuperAdmin=false;
    }
    if(JSON.parse(localStorage.getItem("user")|| '{}').role[0].role_name=="thesis_director"){
      this.isThesisDirector=true;
    }
    else{
      this.isThesisDirector=false;
    }
    if(JSON.parse(localStorage.getItem("user")|| '{}').role[0].role_name=="structure_manager"){
      this.isStructureManager=true;
    }
    else{
      this.isStructureManager=false;
    }
  }

}
