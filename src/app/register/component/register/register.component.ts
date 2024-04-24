import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { RegisterService } from '../../service/register.service';
import { HttpClient, HttpEventType, HttpHeaders, HttpRequest } from '@angular/common/http';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{
  // isLinear=true;
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
    country:new FormControl('',[Validators.required])
  });
  // qualification=new FormGroup({

  // });
  // document=new FormGroup({

  // });

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
  
  get name(){
    return this.personal.get('name');
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
    this.registerService.userRegister(data).toPromise()
    .then(res=>{
      console.log(data);
        
      this.toastr.success("Welcome to the DMS!")
      this.router.navigate(['/login']);
    })
    .catch(e=>{
      this.toastr.error("This username already exist!")
    });
  }

  // title = 'resumeMultipleUpload';
  // selectedFiles: any = [];


  // dropHandler(ev:any) {
  //   // Prevent default behavior(file from being opened)
  //   ev.preventDefault();
  
  //   if (ev.dataTransfer.items) {
  //     // Use DataTransferItemList interface to access the file(s)
  //     for (var i = 0; i < ev.dataTransfer.items.length; i++) {
  //       // If dropped items aren't files, reject them
  //       if (ev.dataTransfer.items[i].kind === 'file') {
  //         let file = ev.dataTransfer.items[i].getAsFile();
  //         let obj= {
  //           fileName: file.name,
  //           selectedFile: file,
  //           fileId: `${file.name}-${file.lastModified}`,
  //           uploadCompleted: false
  //         }
  //         this.selectedFiles.push(obj);
  //         console.log('... file[' + i + '].name = ' + file.name);
  //       }
  //     }
  //     this.selectedFiles.forEach((file: any) => this.getFileUploadStatus(file));
  //   } else {
      
  //     for (var i = 0; i < ev.dataTransfer.files.length; i++) {
  //       console.log('... file[' + i + '].name = ' + ev.dataTransfer.files[i].name);
  //     }
  //   }
  // }

  // dragOverHandler(ev: { preventDefault: () => void; stopPropagation: () => void; }) {
  //   console.log('File(s) in drop zone'); 
  
  //   // Prevent default behavior (Prevent file from being opened)
  //   ev.preventDefault();
  //   ev.stopPropagation();
  // }



  // getFileUploadStatus(file: any){
  //   // fetch the file status on upload
  //   let headers = new HttpHeaders({
  //     "size": file.selectedFile.size.toString(),
  //     "x-file-id": file.fileId,
  //     'name': file.fileName
  //   });

  //   this.http
  //     .get("http://localhost:3000/status", { headers: headers }).subscribe(
  //       (res: any) => {
  //         file.uploadedBytes = res.uploaded;
  //         file.uploadedPercent = Math.round(100* file.uploadedBytes/file.selectedFile.size);
  //         if(file.uploadedPercent >= 100){
  //           file.uploadCompleted = true;
  //         }
  //       },err => {
  //         console.log(err);
  //       }
  //     )
  // }

  // uploadFiles(){
  //   this.selectedFiles.forEach((file:any) => {
  //     if(file.uploadedPercent < 100)
  //       this.resumeUpload(file);
  //   })
  // }

  // resumeUpload(file: any){
  //   const headers2 = new HttpHeaders({
  //     "size": file.selectedFile.size.toString(),
  //     "x-file-id": file.fileId,
  //     "x-start-byte": file.uploadedBytes.toString(),
  //     'name': file.fileName
  //   });
  //   console.log(file.uploadedBytes, file.selectedFile.size, file.selectedFile.slice(file.uploadedBytes).size);
    
  //   const req = new HttpRequest('POST', "http://localhost:3000/upload", file.selectedFile.slice(file.uploadedBytes, file.selectedFile.size + 1),{
  //          headers: headers2,
  //         reportProgress: true
  //       });

  //   this.http.request(req).subscribe(
  //     (res: any) => {
  //       if(res.type === HttpEventType.UploadProgress){
  //         file.uploadedPercent = Math.round(100* (file.uploadedBytes+res.loaded)/res.total);
  //         console.log(file.uploadedPercent);
  //         if(file.uploadedPercent >= 100){
  //           file.uploadCompleted = true;
  //         }
  //       }else{
  //         if(file.uploadedPercent >= 100){
  //           file.uploadCompleted = true;
  //         }
  //       }
  //     },
  //     err => {
  //       console.log(err)
  //     }
  //   )
  // }

  // deleteFile(file: any){
  //   this.selectedFiles.splice(this.selectedFiles.indexOf(file), 1);
  // }

}
