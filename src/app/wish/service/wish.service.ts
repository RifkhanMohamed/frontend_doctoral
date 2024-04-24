import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environment/environment';

@Injectable({
  providedIn: 'root'
})
export class WishService {

  constructor(private http:HttpClient) { }

  base_url=environment.api;

  wishCreate(data:any): Observable<any> {
    console.log(data);
    
    return this.http.post<any>(this.base_url+"wish/create",data);
  }
}
