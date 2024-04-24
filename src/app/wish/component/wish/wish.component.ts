import { Component, OnInit, ViewChild } from '@angular/core';
import { WishService } from '../../service/wish.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { HttpClient } from '@angular/common/http';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CourseService } from 'src/app/course/service/course.service';
import {Course} from './../../../course/model/course'
import { LoginService } from 'src/app/login/service/login.service';

@Component({
  selector: 'app-wish',
  templateUrl: './wish.component.html',
  styleUrls: ['./wish.component.css']
})
export class WishComponent implements OnInit{
  constructor(private wishService:WishService,
    private router: Router,
    private toastr:ToastrService,
    private http: HttpClient,
  private courseService: CourseService,
  private route: ActivatedRoute,
private loginService: LoginService){}
    qualifications: string[] = [];
    courses:Course[]=[];
    files: File[] = [];

ngOnInit(): void {
  this.getCourse();
  this.route.queryParams.subscribe(params => {
    const selectedValue = params['course'];
    this.wish.get('course')?.setValue(selectedValue)
  });
}


  wish=new FormGroup({
  course:new FormControl({value:'',disabled:true}),
  qualification:new FormControl(''),
  name:new FormControl('',[Validators.required]),
  email:new FormControl('',[Validators.required,Validators.email]),
  phone:new FormControl('',[Validators.required]),
});

getCourse(){
  this.courseService.getCourse().subscribe((results)=>{
    this.courses=results;
  })
}

get course(){
  return this.wish.get('course');
}

get qualification(){
  return this.wish.get('qualification');
}
get name(){
  return this.wish.get('name');
}

get email(){
  return this.wish.get('email');
}

get phone(){
  return this.wish.get('phone');
}
onSubmit(){

  let data={
    "name":this.wish.get('name')?.value,
    "email":this.wish.get('email')?.value,
    "phone":this.wish.get('phone')?.value,
    "course":{
      "id": Number(this.wish.get('course')?.value)
    },
    "files":this.files,
    "qualification":this.qualifications,
    "user": JSON.parse(localStorage.getItem("user")|| '{}').email,
  }
  // this.wishService.wishCreate(data).toPromise()
  // .then(res=>{
    console.log(data);
      
  //   this.toastr.success("Successfully Register!")
  //   this.router.navigate(['/home']);
  // })
  // .catch(e=>{
  //   this.toastr.error("Error -> ",e)
  // });
  
}


addQualification(quali:any){
  this.qualifications.push(quali);
  this.wish.get('qualification')?.setValue("");
}

isQualificationsEmpty(): boolean {
  return this.qualifications.length === 0;
}

removeQualification(index:number){
  this.qualifications.splice(index, 1);
}

// onFileChange(event: any) {
//   const newFiles: File[] = event.target.files;
//   this.files.push(...newFiles);
// }

onFileChange(event: any) {
  const newFiles: File[] = event.target.files;
  for (const file of newFiles) {
    this.convertFileToBase64(file);
  }
}

convertFileToBase64(file: File) {
  const reader = new FileReader();
  reader.onload = () => {
    const base64String = reader.result?.toString().split(',')[1]; // Extract base64 string
    if (base64String) {
      // Create a new File object with the Base64 string
      const base64File = new File([this.base64ToArrayBuffer(base64String)], file.name, { type: file.type });
      // Push the new File object into the files array
      this.files.push(base64File);
    }
  };
  reader.readAsDataURL(file); // Read file as Data URL (Base64)
}

base64ToArrayBuffer(base64: string): ArrayBuffer {
  const binaryString = window.atob(base64);
  const binaryLen = binaryString.length;
  const bytes = new Uint8Array(binaryLen);
  for (let i = 0; i < binaryLen; ++i) {
    bytes[i] = binaryString.charCodeAt(i);
  }
  return bytes.buffer;
}


uploadFiles() {
  for (const file of this.files) {
    this.addQualification(file.name);
  }
  this.files = [];
}

isFilesEmpty(): boolean {
  return this.files.length === 0;
}

removeFile(index: number) {
  this.files.splice(index, 1);
}
}
