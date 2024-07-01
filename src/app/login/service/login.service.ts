import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environment/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  headers = new HttpHeaders({
    "No-Auth":"True"
  });
  httpOptions={
    headers:this.headers
  }

  constructor(private http:HttpClient) { }

  base_url=environment.api;

  public login(logiData:any){
      return this.http.post(this.base_url+'authenticate',logiData,{headers:this.headers});
  }

  public setRoles(roles:[]){
    localStorage.setItem("roles",JSON.stringify(roles));
  }

  public setUserDetails(user:[]){
    localStorage.setItem("user",JSON.stringify(user));
  }

  public getRoles():[]{
    return JSON.parse(localStorage.getItem("roles")|| '{}'); 
  }

  public getUserDetails():[]{
    return JSON.parse(localStorage.getItem("user")|| '{}'); 
  }

  public setToken(token:string){
    localStorage.setItem("token",token);
  }

  public getToken():string{
    return localStorage.getItem("token")|| '';
  }

  public clear(){
    localStorage.clear();
  }

  public isLoggedIn(){
    return this.getRoles()&&this.getToken();
  }

  // public roleMatch(allowedRoles:any):boolean{
  //   let isMatch=false;
  //   const userRoles:any=this.getRoles();
  //   if(userRoles!=null&&userRoles){
  //     for(let i=0;i<userRoles.length;i++){
  //       for(let j=0;j<allowedRoles.length;j++){
  //         if(userRoles[i].role_name===allowedRoles[j]){
  //           isMatch=true;
  //           return isMatch;
  //         }
  //         else{
  //           return isMatch;
  //         }
  //       }
  //     }
  //   }
  //     return isMatch;
  // }
  
  public roleMatch(allowedRoles: any[]): boolean {
    let isMatch = false;
    const userRoles: any[] = this.getRoles();
    if (userRoles && userRoles.length) {
      for (let i = 0; i < userRoles.length; i++) {
        for (let j = 0; j < allowedRoles.length; j++) {
          if (userRoles[i].role_name === allowedRoles[j]) {
            isMatch = true;
            break; // Exit inner loop if a match is found
          }
        }
        if (isMatch) {
          break; // Exit outer loop if a match is found
        }
      }
    }
    return isMatch;
  }
  

}
