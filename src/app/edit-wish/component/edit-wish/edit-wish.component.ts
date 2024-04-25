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

ngOnInit(): void {
  this.getCourse();
  this.route.queryParams.subscribe(params => {
    const selectedValue = params['wish'];
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

}