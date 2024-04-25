import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FileHandle } from 'src/app/_model/file-handle.model';
import { Course } from 'src/app/course/model/course';
import { CourseService } from 'src/app/course/service/course.service';
import { LoginService } from 'src/app/login/service/login.service';
import { WishService } from 'src/app/wish/service/wish.service';

@Component({
  selector: 'app-edit-wish',
  templateUrl: './edit-wish.component.html',
  styleUrls: ['./edit-wish.component.css']
})
export class EditWishComponent implements OnInit{
  constructor(private wishService:WishService,
    private router: Router,
    private toastr:ToastrService,
    private http: HttpClient,
  private courseService: CourseService,
  private route: ActivatedRoute,
private loginService: LoginService,
private sanitize: DomSanitizer){}
    qualifications: string[] = [];
    courses:Course[]=[];
    files: any[] = [];
wishId:any;
wish:any=[];
ngOnInit(): void {
  this.getCourse();
  this.route.queryParams.subscribe(params => {
    const selectedValue = params['wish'];
    this.wishId=selectedValue;
  });
  this.getWish();
}


Editwish=new FormGroup({
  course:new FormControl('',[Validators.required]),
  qualification:new FormControl(''),
  name:new FormControl('',[Validators.required]),
  email:new FormControl('',[Validators.required,Validators.email]),
  phone:new FormControl('',[Validators.required]),
});

getCourse(){
  this.courseService.getCourse().subscribe((results)=>{
    this.courses=results;
    console.log(this.courses);
    
  })
}

get course(){
  return this.Editwish.get('course');
}

get qualification(){
  return this.Editwish.get('qualification');
}
get name(){
  return this.Editwish.get('name');
}

get email(){
  return this.Editwish.get('email');
}

get phone(){
  return this.Editwish.get('phone');
}

onSubmit(){

  let data={
    "name":this.Editwish.get('name')?.value,
    "email":this.Editwish.get('email')?.value,
    "phone":this.Editwish.get('phone')?.value,
    "course":{
      "id": Number(this.Editwish.get('course')?.value)
    },
    "files":this.files,
    "qualification":this.qualifications,
    "user": JSON.parse(localStorage.getItem("user")|| '{}').email,
  }

  const formData=new FormData();
  formData.append(
    'wish',
    new Blob([JSON.stringify(data)],{type:'application/json'})
  )

  for(var i=0; i<data.files.length;i++){
    formData.append(
      'file',
      data.files[i].file,
      data.files[i].file.name
    )
  }
  this.wishService.wishCreate(formData).toPromise()
  .then(res=>{
   console.log(data);
      
    this.toastr.success("Successfully register your wish!")
    this.router.navigate(['/home']);
  })
  .catch(e=>{
    this.toastr.error("Error -> ",e)
  });
  
}


addQualification(quali:any){
  this.qualifications.push(quali);
  this.Editwish.get('qualification')?.setValue("");
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
    const fileHandle: FileHandle = {
      file:file,
      url: this.sanitize.bypassSecurityTrustUrl(
        window.URL.createObjectURL(file)
      )
    }
    this.files.push(fileHandle);
  } 
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

getWish(){
  this.wishService.wishGetById(this.wishId).subscribe((results)=>{
    this.wish=results;
    this.Editwish.get('course')?.setValue(this.wish.course.id);
    this.Editwish.get('name')?.setValue(this.wish.name);
    this.Editwish.get('email')?.setValue(this.wish.email);
    this.Editwish.get('phone')?.setValue(this.wish.phone);
    this.qualifications=this.wish.qualification;
    this.files=this.wish.files
  })
}

downloadImage(i:any): void {
  const base64Data = this.wish.files[i].data; 
  const type = this.wish.files[i].type;
  const blob = this.base64ToBlob(base64Data, type);
  const file = new File([blob], this.wish.files[i].name);

  const link = document.createElement('a');
  link.href = URL.createObjectURL(file);
  link.download = this.wish.files[i].name;
  link.click();

}

base64ToBlob(base64Data: string, contentType: string): Blob {
  const byteCharacters = atob(base64Data);
  const byteArrays = [];
  for (let offset = 0; offset < byteCharacters.length; offset += 512) {
    const slice = byteCharacters.slice(offset, offset + 512);
    const byteNumbers = new Array(slice.length);
    for (let i = 0; i < slice.length; i++) {
      byteNumbers[i] = slice.charCodeAt(i);
    }
    const byteArray = new Uint8Array(byteNumbers);
    byteArrays.push(byteArray);
  }
  return new Blob(byteArrays, { type: contentType });
}

}