import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/login/service/login.service';
import { WishService } from 'src/app/wish/service/wish.service';

@Component({
  selector: 'app-modify-wish',
  templateUrl: './modify-wish.component.html',
  styleUrls: ['./modify-wish.component.css']
})
export class ModifyWishComponent {
  constructor(private loginService:LoginService,private router: Router,private wishService:WishService){
    this.getWish();
  }
  wish: any[]=[];
  key: string='id';
  reverse:boolean=false;
  p:number=1;
  getWish(){
    this.wishService.wishGetByUser(JSON.parse(localStorage.getItem("user")|| '{}').email).subscribe((results)=>{
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
