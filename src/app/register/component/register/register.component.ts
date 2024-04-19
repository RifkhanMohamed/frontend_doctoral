import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { RegisterService } from '../../service/register.service';
import { LoginService } from 'src/app/login/service/login.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{
  isLinear=false;
  constructor(private registerService:RegisterService,
    private loginService:LoginService,
    private router: Router,
    private toastr:ToastrService,
    private formBuilder:FormBuilder){}
  ngOnInit(): void {
  }
  

    personal=new FormGroup({
    full_name:new FormControl('',[Validators.required]),
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
    country:new FormControl('',[Validators.required])
  });
  qualification=new FormGroup({

  });
  document=new FormGroup({

  });

  // signupForm=this.formBuilder.group({
  //   personal:this.formBuilder.group({
  //     full_name:new FormControl('',[Validators.required]),
  //     email:new FormControl('',[Validators.required,Validators.email]),
  //     phone:new FormControl('',[Validators.required]),
  //     password:new FormControl('',[Validators.required]),
  //     confirmPassword:new FormControl('',[Validators.required]),
  //     address_line1:new FormControl('',[Validators.required]),
  //     address_line2:new FormControl(''),
  //     street:new FormControl('',[Validators.required]),
  //     postcode:new FormControl('',[Validators.required]),
  //     town:new FormControl('',[Validators.required]),
  //     county:new FormControl('',[Validators.required]),
  //     country:new FormControl('',[Validators.required]),
  //   }),
  //   qualification:this.formBuilder.group({

  //   }),
  //   document:this.formBuilder.group({

  //   })
  // })
  
  get full_name(){
    return this.personal.get('full_name');
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
      "full_name":this.personal.get('full_name')?.value,
      "email":this.personal.get('email')?.value,
      "phone":this.personal.get('phone')?.value,
      "password":this.personal.get('password')?.value,
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
    this.registerService.userRegister(data).subscribe(
      (res:any)=>{
        this.toastr.success("Welcome to the DMS!")
        this.router.navigate(['/login']);
      },
      ()=>{
        this.toastr.error("This username already exist!")
      }
    )
  }

}
