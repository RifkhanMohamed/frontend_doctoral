import { Component } from '@angular/core';
import { LoginService } from './login/service/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'doctoral';
  sideBarOpen = true;
  admin:any;
  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }
  role:any;
  constructor(public loginService:LoginService){    
    this.admin=false;
  }
}
