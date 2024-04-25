import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environment/environment';

@Injectable({
  providedIn: 'root'
})
export class ModifyWishService {
  constructor(private http:HttpClient) { }

  base_url=environment.api;
}
