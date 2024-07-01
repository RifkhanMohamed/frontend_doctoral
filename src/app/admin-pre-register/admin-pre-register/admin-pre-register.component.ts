import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/login/service/login.service';
import { WishService } from 'src/app/wish/service/wish.service';
import * as pdfMake from 'pdfmake/build/pdfMake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts'; 
import { ModifyWishService } from '../../modify-wish/service/modify-wish.service';
import { ToastrService } from 'ngx-toastr';

(pdfMake as any).vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-admin-pre-register',
  templateUrl: './admin-pre-register.component.html',
  styleUrls: ['./admin-pre-register.component.css']
})
export class AdminPreRegisterComponent implements OnInit{
  isCommittee=false;
  isSuperAdmin=false;
  constructor(private loginService:LoginService,private router: Router,private wishService:WishService,private modifyService:ModifyWishService,private toastr:ToastrService){
    this.getWish();
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
  }
  ngOnInit(): void {
  }


  sendInvitation(email:any,name:any,status:any) {
    const to = email;
    const subject = 'Invitation to the competition';
    const text = 'Hi '+name+' You have been invited to the competition. Please check your account for more details.';
    this.wishService.wishUpdateStatusPreSelectedByCommission(email,status).subscribe((results)=>{
      // this.wish=results;
      window.location.reload();
    });
    this.modifyService.sendEmail(to, subject, text).subscribe(response => {
      console.log('Email sent successfully', response);
      
    }, error => {
      console.error('Error sending email', error);
    });

    
    this.toastr.success("Email sent successfully!");
  }

  wish: any=[];
  key: string='id';
  reverse:boolean=false;
  p:number=1;
  isDownload:boolean=false;
  getWish(){
      this.wishService.wishGetAllStatus("applied").subscribe((results)=>{
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


  





  
}
