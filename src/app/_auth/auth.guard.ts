import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from '../login/service/login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private loginService:LoginService,private router:Router){

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
      if(this.loginService.getToken()!==null){
        const role=route.data["roles"] as Array<string>;
        if(role){
          const match=this.loginService.roleMatch(role);
          if(match){
            return true;
          }
          else{
            this.router.navigate(['/forbidden']);
            return false;
          }
        }
      }
      this.router.navigate(['/login']);
      return false;
  }
  
}
