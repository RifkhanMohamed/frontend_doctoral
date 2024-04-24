import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/login/service/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private loginService:LoginService,private router: Router){
  }
  arrayLength:any;
  array:any;
  navigateHome(){
    this.router.navigate(['home']);
  }


  isLoggedIn(){
    return this.loginService.isLoggedIn();
  }

  logout(){
    this.loginService.clear();
    this.arrayLength=0;
    this.array=[];
    this.router.navigate(['/login']);
  }

}
