import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environment/environment';

@Injectable({
  providedIn: 'root'
})
export class ModifyWishService {
  constructor(private http:HttpClient) { }

  base_url=environment.api;

  private emailUrl = 'api/email/send';  // URL to web api


  sendEmail(to: string, subject: string, text: string): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const body = { to, subject, text };

    return this.http.post<any>(this.base_url+this.emailUrl, body, { headers });
  }
}
