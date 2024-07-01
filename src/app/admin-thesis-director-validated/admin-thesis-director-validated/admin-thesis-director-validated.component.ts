import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LoginService } from 'src/app/login/service/login.service';
import { ModifyWishService } from 'src/app/modify-wish/service/modify-wish.service';
import { WishService } from 'src/app/wish/service/wish.service';
import * as XLSX from 'xlsx';
@Component({
  selector: 'app-admin-thesis-director-validated',
  templateUrl: './admin-thesis-director-validated.component.html',
  styleUrls: ['./admin-thesis-director-validated.component.css']
})
export class AdminThesisDirectorValidatedComponent implements OnInit{
  isStructureManager=false;
  isSuperAdmin=false;
  constructor(private loginService:LoginService,private router: Router,private wishService:WishService,private modifyService:ModifyWishService,private toastr:ToastrService){
    this.getWish();
    if(JSON.parse(localStorage.getItem("user")|| '{}').role[0].role_name=="structure_manager"){
      this.isStructureManager=true;
    }
    else{
      this.isStructureManager=false;
    }
    if(JSON.parse(localStorage.getItem("user")|| '{}').role[0].role_name=="super_admin"){
      this.isSuperAdmin=true;
    }
    else{
      this.isSuperAdmin=false;
    }
  }
  ngOnInit(): void {
  }




  wish: any=[];
  key: string='id';
  reverse:boolean=false;
  p:number=1;
  isDownload:boolean=false;
  getWish(){
      this.wishService.wishGetAllStatusResultsStructure().subscribe((results)=>{
        this.wish=results;
      });
  }

  sort(key: any){
    this.key=key;
    this.reverse=!this.reverse;
  }

  reDirect(wish:any){
    this.router.navigate(['/edit-wish'],{ queryParams: { wish: wish } });
  }

  exportToExcel(){
    const ws = XLSX.utils.json_to_sheet(this.wish);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb,ws,'pre_selected_students');
    XLSX.writeFile(wb, 'pre_selected_students_list.xlsx');
  }

  sendInvitation(email:any,name:any,status:any) {
    // const to = email;
    // const subject = 'Invitation to the competition';
    // const text = 'Hi '+name+' You have been invited to the competition. Please check your account for more details.';
    this.wishService.wishUpdateStatusPreSelectedByCommission(email,status).subscribe((results)=>{
      // this.wish=results;
      window.location.reload();
    });
    // this.modifyService.sendEmail(to, subject, text).subscribe(response => {
    //   console.log('Email sent successfully', response);
      
    // }, error => {
    //   console.error('Error sending email', error);
    // });

    
    // this.toastr.success("Email sent successfully!");
  }

}


