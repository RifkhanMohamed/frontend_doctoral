import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { RegisterService } from 'src/app/register/service/register.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  constructor(private registerService:RegisterService,
    private router: Router,
    private toastr:ToastrService,
    private http: HttpClient){}
  ngOnInit(): void {
  }
  

    personal=new FormGroup({
    name:new FormControl('',[Validators.required]),
    email:new FormControl('',[Validators.required,Validators.email]),
    phone:new FormControl('',[Validators.required]),
    password:new FormControl('',[Validators.required]),
    confirmPassword:new FormControl('',[Validators.required]),
    address_line1:new FormControl('',[Validators.required]),
    address_line2:new FormControl(''),
    street:new FormControl('',[Validators.required]),
    postcode:new FormControl('',[Validators.required]),
    town:new FormControl('',[Validators.required]),
    county:new FormControl('',[Validators.required]),
    country:new FormControl('',[Validators.required]),
    role:new FormControl('',[Validators.required]),
  });

  
  get name(){
    return this.personal.get('name');
  }

  get role(){
    return this.personal.get('role');
  }
  
  get email(){
    return this.personal.get('email');
  }
  
  get phone(){
    return this.personal.get('phone');
  }
  
  get user_name(){
    return this.personal.get('user_name');
  }
  
  get address_line1(){
    return this.personal.get('address_line1');
  }
  
  get street(){
    return this.personal.get('street');
  }
  
  get postcode(){
    return this.personal.get('postcode');
  }
  
  get town(){
    return this.personal.get('town');
  }
  
  get county(){
    return this.personal.get('county');
  }
  
  get country(){
    return this.personal.get('country');
  }
  
  get password(){
    return this.personal.get('password');
  }

  get confirmPassword(){
    return this.personal.get('confirmPassword');
  }
  
  onSubmit(){
    let data={
      "name":this.personal.get('name')?.value,
      "email":this.personal.get('email')?.value,
      "phone":this.personal.get('phone')?.value,
      "password":this.personal.get('password')?.value,
      "role":[{
        "role_name":this.personal.get('role')?.value
      }],
      "address":{
        "address_line1":this.personal.get('address_line1')?.value,
        "address_line2":this.personal.get('address_line2')?.value,
        "street":this.personal.get('street')?.value,
        "postcode":this.personal.get('postcode')?.value,
        "town":this.personal.get('town')?.value,
        "county":this.personal.get('county')?.value,
        "country":this.personal.get('country')?.value,
      }
    }
    this.registerService.adminRegister(data).toPromise()
    .then(res=>{
      console.log(data);
        
      this.toastr.success("Welcome to the DMS!")
      this.router.navigate(['/admin-home']);
    })
    .catch(e=>{
      this.toastr.error("This username already exist!")
    });
  }

}
