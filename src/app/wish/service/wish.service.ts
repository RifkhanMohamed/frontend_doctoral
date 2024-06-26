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

  wishCreate(data:FormData): Observable<any> {
    console.log(data);
    return this.http.post<any>(this.base_url+"wish/create",data);
  }

  wishGetByUser(user:any): Observable<any>{
    return this.http.get<any>(this.base_url+"wish/get/"+user);
  }

  wishUpdateStatusByUser(user:any): Observable<any>{
    return this.http.put<any>(this.base_url+"wish/update/status/"+user,null,{ responseType: 'text' as 'json' });
  }

  wishGetById(id:any): Observable<any>{
    return this.http.get<any>(this.base_url+"wish/get/id/"+id);
  }

  wishGetAll(): Observable<any>{
    return this.http.get<any>(this.base_url+"wish/get/all");
  }
}
