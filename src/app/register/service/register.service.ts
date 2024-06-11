import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environment/environment';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  constructor(private http:HttpClient) { }

  base_url=environment.api;

  userRegister(data:any): Observable<any> {
    console.log(data);
    
    return this.http.post<any>(this.base_url+"user/register",data);
  }


  adminRegister(data:any): Observable<any> {
    console.log(data);
    
    return this.http.post<any>(this.base_url+"user/admin/register",data);
  }
}
