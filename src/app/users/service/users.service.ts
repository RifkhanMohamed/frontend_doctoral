import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environment/environment';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  constructor(private http:HttpClient) { }

  base_url=environment.api;

  getUsers(){
    return this.http.get<any>(this.base_url+"user/get/users");
  }
}
