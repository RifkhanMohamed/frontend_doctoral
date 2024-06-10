import { Component, OnInit, ViewChild } from '@angular/core';
import { WishService } from '../../service/wish.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { HttpClient } from '@angular/common/http';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CourseService } from 'src/app/course/service/course.service';
import {Course} from './../../../course/model/course'
import { LoginService } from 'src/app/login/service/login.service';
import { FileHandle } from 'src/app/_model/file-handle.model';
import { DomSanitizer } from '@angular/platform-browser';

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
private loginService: LoginService,
private sanitize: DomSanitizer){}
    qualifications: string[] = [];
    courses:Course[]=[];
    files: any[] = [];
    files1: any[] = [];
    files2: any[] = [];
    files3: any[] = [];
    files4: any[] = [];
    files5: any[] = [];
    files6: any[] = [];

ngOnInit(): void {
  this.getCourse();
  // this.route.queryParams.subscribe(params => {
  //   const selectedValue = params['course'];
  //   this.wish.get('course')?.setValue(selectedValue)
  // });
}


wish=new FormGroup({
  course:new FormControl('',[Validators.required]),
  // qualification:new FormControl(''),
  name:new FormControl('',[Validators.required]),
  email:new FormControl('',[Validators.required,Validators.email]),
  phone:new FormControl('',[Validators.required]),
  establishment:new FormControl('',[Validators.required]),
  department:new FormControl('',[Validators.required]),
  center:new FormControl('',[Validators.required]),
  head:new FormControl('',[Validators.required]),
  structure:new FormControl('',[Validators.required]),
  head_structure:new FormControl('',[Validators.required]),
  supervisor:new FormControl('',[Validators.required]),
  siga:new FormControl(''),
  apogee:new FormControl(''),
  dob:new FormControl('',[Validators.required]),
  place:new FormControl('',[Validators.required]),
  cr:new FormControl(''),
  nationality:new FormControl('',[Validators.required]),
  address:new FormControl('',[Validators.required]),
  degree:new FormControl('',[Validators.required]),
  q_degree:new FormControl('',[Validators.required]),
  q_degree_other:new FormControl(''),
  thesis_subject:new FormControl('',[Validators.required]),
  co_supervisor:new FormControl('',[Validators.required]),
  address_co_supervisor:new FormControl('',[Validators.required]),
  co_supervisor_phone:new FormControl('',[Validators.required]),
  co_supervisor_email:new FormControl('',[Validators.required,Validators.email]),
  co_supervision:new FormControl('',[Validators.required]),
  marital:new FormControl('',[Validators.required]),
  gender:new FormControl('',[Validators.required]),
  sal_status:new FormControl('',[Validators.required]),
  b_speciality:new FormControl(''),
  b_year:new FormControl(''),
  b_establishment:new FormControl(''),
  l_speciality:new FormControl(''),
  l_year:new FormControl(''),
  l_establishment:new FormControl(''),
  m_speciality:new FormControl(''),
  m_year:new FormControl(''),
  m_establishment:new FormControl(''),
  o_speciality:new FormControl(''),
  o_year:new FormControl(''),
  o_establishment:new FormControl(''),
  lang1:new FormControl(''),
  lang2:new FormControl(''),
  lang3:new FormControl(''),
  lang4:new FormControl(''),
  lang1_reading:new FormControl(''),
  lang1_writing:new FormControl(''),
  lang1_spoken:new FormControl(''),
  lang2_reading:new FormControl(''),
  lang2_writing:new FormControl(''),
  lang2_spoken:new FormControl(''),
  lang3_reading:new FormControl(''),
  lang3_writing:new FormControl(''),
  lang3_spoken:new FormControl(''),
  lang4_reading:new FormControl(''),
  lang4_writing:new FormControl(''),
  lang4_spoken:new FormControl(''),
  r1_name:new FormControl(''),
  r1_title:new FormControl(''),
  r1_address:new FormControl(''),
  r2_name:new FormControl(''),
  r2_title:new FormControl(''),
  r2_address:new FormControl(''),
  r3_name:new FormControl(''),
  r3_title:new FormControl(''),
  r3_address:new FormControl(''),
  other_establishments:new FormControl(''),
  other_establishments_year:new FormControl(''),
  application_refused:new FormControl(''),
  application_refused_reason:new FormControl('')
});



getCourse(){
  this.courseService.getCourse().subscribe((results)=>{
    this.courses=results;
  })
}

get course(){
  return this.wish.get('course');
}

// get qualification(){
//   return this.wish.get('qualification');
// }
get name(){
  return this.wish.get('name');
}

get email(){
  return this.wish.get('email');
}

get phone(){
  return this.wish.get('phone');
}

get establishment(){
  return this.wish.get('establishment');
}

get department(){
  return this.wish.get('department');
}
get center(){
  return this.wish.get('center');
}

get head(){
  return this.wish.get('head');
}

get structure(){
  return this.wish.get('structure');
}

get head_structure(){
  return this.wish.get('head_structure');
}

get supervisor(){
  return this.wish.get('supervisor');
}

get dob(){
  return this.wish.get('dob');
}

get place(){
  return this.wish.get('place');
}

get nationality(){
  return this.wish.get('nationality');
}

get address(){
  return this.wish.get('address');
}

get degree(){
  return this.wish.get('degree');
}

get q_degree(){
  return this.wish.get('q_degree');
}

get thesis_subject(){
  return this.wish.get('thesis_subject');
}

get co_supervisor(){
  return this.wish.get('co_supervisor');
}

get address_co_supervisor(){
  return this.wish.get('address_co_supervisor');
}

get co_supervisor_phone(){
  return this.wish.get('co_supervisor_phone');
}

get co_supervisor_email(){
  return this.wish.get('co_supervisor_email');
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
    "files1":this.files1,
    "files2":this.files2,
    "files3":this.files3,
    "files4":this.files4,
    "files5":this.files5,
    "files6":this.files6,
    // "qualification":this.qualifications,
    "user": JSON.parse(localStorage.getItem("user")|| '{}').email,
    "status": "enrolled",
    "establishment":this.wish.get('establishment')?.value,
    "department":this.wish.get('department')?.value,
    "center":this.wish.get('center')?.value,
    "head":this.wish.get('head')?.value,
    "structure":this.wish.get('structure')?.value,
    "headstructure":this.wish.get('head_structure')?.value,
    "supervisor":this.wish.get('supervisor')?.value,
    "siga":this.wish.get('siga')?.value,
    "apogee":this.wish.get('apogee')?.value,
    "dob":this.wish.get('dob')?.value,
    "place":this.wish.get('place')?.value,
    "cr":this.wish.get('cr')?.value,
    "nationality":this.wish.get('nationality')?.value,
    "address":this.wish.get('address')?.value,
    "degree":this.wish.get('degree')?.value,
    "qdegree":this.wish.get('q_degree')?.value,
    "qdegreeother":this.wish.get('q_degree_other')?.value,
    "thesissubject":this.wish.get('thesis_subject')?.value,
    "cosupervisor":this.wish.get('co_supervisor')?.value,
    "addresscosupervisor":this.wish.get('address_co_supervisor')?.value,
    "cosupervisorphone":this.wish.get('co_supervisor_phone')?.value,
    "cosupervisoremail":this.wish.get('co_supervisor_email')?.value,
    "cosupervision":this.wish.get('co_supervision')?.value,
    "marital":this.wish.get('marital')?.value,
    "gender":this.wish.get('gender')?.value,
    "salstatus":this.wish.get('sal_status')?.value,
    "bspeciality":this.wish.get('b_speciality')?.value,
    "byear":this.wish.get('b_year')?.value,
    "bestablishment":this.wish.get('b_establishment')?.value,
    "lspeciality":this.wish.get('l_speciality')?.value,
    "lyear":this.wish.get('l_year')?.value,
    "lestablishment":this.wish.get('l_establishment')?.value,
    "mspeciality":this.wish.get('m_speciality')?.value,
    "myear":this.wish.get('m_year')?.value,
    "mestablishment":this.wish.get('m_establishment')?.value,
    "ospeciality":this.wish.get('o_speciality')?.value,
    "oyear":this.wish.get('o_year')?.value,
    "oestablishment":this.wish.get('o_establishment')?.value,
    "lang1":this.wish.get('lang1')?.value,
    "lang2":this.wish.get('lang2')?.value,
    "lang3":this.wish.get('lang3')?.value,
    "lang4":this.wish.get('lang4')?.value,
    "lang1reading":this.wish.get('lang1_reading')?.value,
    "lang1writing":this.wish.get('lang1_writing')?.value,
    "lang1spoken":this.wish.get('lang1_spoken')?.value,
    "lang2reading":this.wish.get('lang2_reading')?.value,
    "lang2writing":this.wish.get('lang2_writing')?.value,
    "lang2spoken":this.wish.get('lang2_spoken')?.value,
    "lang3reading":this.wish.get('lang3_reading')?.value,
    "lang3writing":this.wish.get('lang3_writing')?.value,
    "lang3spoken":this.wish.get('lang3_spoken')?.value,
    "lang4reading":this.wish.get('lang4_reading')?.value,
    "lang4writing":this.wish.get('lang4_writing')?.value,
    "lang4spoken":this.wish.get('lang4_spoken')?.value,
    "r1name":this.wish.get('r1_name')?.value,
    "r1title":this.wish.get('r1_title')?.value,
    "r1address":this.wish.get('r1_address')?.value,
    "r2name":this.wish.get('r2_name')?.value,
    "r2title":this.wish.get('r2_title')?.value,
    "r2address":this.wish.get('r2_address')?.value,
    "r3name":this.wish.get('r3_name')?.value,
    "r3title":this.wish.get('r3_title')?.value,
    "r3address":this.wish.get('r3_address')?.value,
    "otherestablishments":this.wish.get('other_establishments')?.value,
    "otherestablishmentsyear":this.wish.get('other_establishments_year')?.value,
    "applicationrefused":this.wish.get('application_refused')?.value,
    "applicationrefusedreason":this.wish.get('application_refused_reason')?.value
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

  for(var i=0; i<data.files1.length;i++){
    formData.append(
      'file1',
      data.files1[i].file,
      data.files1[i].file.name
    )
  }

  for(var i=0; i<data.files2.length;i++){
    formData.append(
      'file2',
      data.files2[i].file,
      data.files2[i].file.name
    )
  }

  for(var i=0; i<data.files3.length;i++){
    formData.append(
      'file3',
      data.files3[i].file,
      data.files3[i].file.name
    )
  }

  for(var i=0; i<data.files4.length;i++){
    formData.append(
      'file4',
      data.files4[i].file,
      data.files4[i].file.name
    )
  }

  for(var i=0; i<data.files5.length;i++){
    formData.append(
      'file5',
      data.files5[i].file,
      data.files5[i].file.name
    )
  }

  for(var i=0; i<data.files6.length;i++){
    formData.append(
      'file6',
      data.files6[i].file,
      data.files6[i].file.name
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


// addQualification(quali:any){
//   this.qualifications.push(quali);
//   this.wish.get('qualification')?.setValue("");
// }

// isQualificationsEmpty(): boolean {
//   return this.qualifications.length === 0;
// }

// removeQualification(index:number){
//   this.qualifications.splice(index, 1);
// }

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

onFileChange1(event: any) {
  const newFiles: File[] = event.target.files;
  for (const file of newFiles) {
    const fileHandle: FileHandle = {
      file:file,
      url: this.sanitize.bypassSecurityTrustUrl(
        window.URL.createObjectURL(file)
      )
    }
    this.files1.push(fileHandle);
  } 
}

onFileChange2(event: any) {
  const newFiles: File[] = event.target.files;
  for (const file of newFiles) {
    const fileHandle: FileHandle = {
      file:file,
      url: this.sanitize.bypassSecurityTrustUrl(
        window.URL.createObjectURL(file)
      )
    }
    this.files2.push(fileHandle);
  } 
}

onFileChange3(event: any) {
  const newFiles: File[] = event.target.files;
  for (const file of newFiles) {
    const fileHandle: FileHandle = {
      file:file,
      url: this.sanitize.bypassSecurityTrustUrl(
        window.URL.createObjectURL(file)
      )
    }
    this.files3.push(fileHandle);
  } 
}

onFileChange4(event: any) {
  const newFiles: File[] = event.target.files;
  for (const file of newFiles) {
    const fileHandle: FileHandle = {
      file:file,
      url: this.sanitize.bypassSecurityTrustUrl(
        window.URL.createObjectURL(file)
      )
    }
    this.files4.push(fileHandle);
  } 
}

onFileChange5(event: any) {
  const newFiles: File[] = event.target.files;
  for (const file of newFiles) {
    const fileHandle: FileHandle = {
      file:file,
      url: this.sanitize.bypassSecurityTrustUrl(
        window.URL.createObjectURL(file)
      )
    }
    this.files5.push(fileHandle);
  } 
}

onFileChange6(event: any) {
  const newFiles: File[] = event.target.files;
  for (const file of newFiles) {
    const fileHandle: FileHandle = {
      file:file,
      url: this.sanitize.bypassSecurityTrustUrl(
        window.URL.createObjectURL(file)
      )
    }
    this.files6.push(fileHandle);
  } 
}





// uploadFiles() {
//   for (const file of this.files) {
//     this.addQualification(file.name);
//   }
//   this.files = [];
// }

isFilesEmpty(): boolean {
  return this.files.length === 0;
}

isFiles1Empty(): boolean {
  return this.files1.length === 0;
}

isFiles2Empty(): boolean {
  return this.files2.length === 0;
}

isFiles3Empty(): boolean {
  return this.files3.length === 0;
}

isFiles4Empty(): boolean {
  return this.files4.length === 0;
}

isFiles5Empty(): boolean {
  return this.files5.length === 0;
}

isFiles6Empty(): boolean {
  return this.files6.length === 0;
}

isDegreeQualification(): boolean {
  if(this.wish.get("q_degree")?.value=="other"){
    return true;
  }
  else{
    return false;
  }

}

isOtherEstablishments(): boolean {
  if(this.wish.get("other_establishments")?.value=="yes"){
    return true;
  }
  else{
    return false;
  }

}

isApplicationRefused(): boolean {
  if(this.wish.get("application_refused")?.value=="yes"){
    return true;
  }
  else{
    return false;
  }

}



removeFile(index: number) {
  this.files.splice(index, 1);
}

removeFile1(index: number) {
  this.files1.splice(index, 1);
}

removeFile2(index: number) {
  this.files2.splice(index, 1);
}

removeFile3(index: number) {
  this.files3.splice(index, 1);
}

removeFile4(index: number) {
  this.files4.splice(index, 1);
}

removeFile5(index: number) {
  this.files5.splice(index, 1);
}

removeFile6(index: number) {
  this.files6.splice(index, 1);
}

}
