import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/login/service/login.service';
import { WishService } from 'src/app/wish/service/wish.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{

  ngOnInit(): void {
    
  }
  constructor(private loginService:LoginService,private router: Router,private wishService:WishService){
    this.hasWish();
  }
  arrayLength:any;
  array:any;
  wish: any[]=[];
  isWish:boolean | undefined;
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

  hasWish(){
    this.wishService.wishGetByUser(JSON.parse(localStorage.getItem("user")|| '{}').email).subscribe((results)=>{
      this.wish=results;
      console.log(this.wish);
      
      if(this.wish.length!=0){
        this.isWish=true;
       }
       else{
        this.isWish=false;
       }
    });

  }

}
