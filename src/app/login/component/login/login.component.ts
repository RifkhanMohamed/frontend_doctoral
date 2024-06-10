import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { LoginService } from '../../service/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private toastr:ToastrService,private loginService:LoginService,private router: Router){}

  loginForm=new FormGroup({
    userName:new FormControl('',[Validators.required,Validators.email]),
    userPassword:new FormControl('',[Validators.required])
  });

  get userName(){
    return this.loginForm.get('userName');
  }

  get userPassword(){
    return this.loginForm.get('userPassword');
  }


  login(){    
    this.loginService.login(this.loginForm.value).subscribe(
    (res:any)=>{
      this.loginService.setRoles(res.user.role);
      this.loginService.setUserDetails(res.user);
      this.loginService.setToken(res.jwtToken);
      const role=res.user.role[0];
      if(role.role_name==='committee'){
        this.router.navigate(['/modify-wish']);
      }
      else{
        // if(JSON.parse(localStorage.getItem("cart")|| '{}').length==0||JSON.parse(localStorage.getItem("cart")|| '{}').length==undefined){
          this.router.navigate(['/home']);
        // }
        // else{
        //   this.router.navigate(['/cart']);
        // }
      }
    },
    (error: { message: string; })=>{
      this.toastr.error("Please check your Username and Password! "+error.message)
      console.log(error);
    }
    );
  }
}
