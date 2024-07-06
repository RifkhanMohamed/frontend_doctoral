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
  isCommittee=false;
  isUser=false;
  constructor(private wishService:WishService,
    private router: Router,
    private toastr:ToastrService,
    private http: HttpClient,
  private courseService: CourseService,
  private route: ActivatedRoute,
private loginService: LoginService,
private sanitize: DomSanitizer){
  if(JSON.parse(localStorage.getItem("user")|| '{}').role[0].role_name=="committee"){
    this.isCommittee=true;
  }
  else{
    this.isCommittee=false;
  }
  if(JSON.parse(localStorage.getItem("user")|| '{}').role[0].role_name=="user"){
    this.isUser=true;
  }
  else{
    this.isUser=false;
  }
}
    qualifications: string[] = [];
    courses:Course[]=[];

    files: any[]=[];
    files1: any[] = [];
    files2: any[] = [];
    files3: any[] = [];
    files4: any[] = [];
    files5: any[] = [];
    files6: any[] = [];
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
  application_refused_reason:new FormControl(''),
  cotutelle:new FormControl('',[Validators.required]),
  cotutelle_reason:new FormControl('')
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


get name(){
  return this.Editwish.get('name');
}

get email(){
  return this.Editwish.get('email');
}

get phone(){
  return this.Editwish.get('phone');
}

get establishment(){
  return this.Editwish.get('establishment');
}

get department(){
  return this.Editwish.get('department');
}
get center(){
  return this.Editwish.get('center');
}

get head(){
  return this.Editwish.get('head');
}

get structure(){
  return this.Editwish.get('structure');
}

get head_structure(){
  return this.Editwish.get('head_structure');
}

get supervisor(){
  return this.Editwish.get('supervisor');
}

get dob(){
  return this.Editwish.get('dob');
}

get place(){
  return this.Editwish.get('place');
}

get nationality(){
  return this.Editwish.get('nationality');
}

get address(){
  return this.Editwish.get('address');
}

get degree(){
  return this.Editwish.get('degree');
}

get q_degree(){
  return this.Editwish.get('q_degree');
}

get thesis_subject(){
  return this.Editwish.get('thesis_subject');
}

get co_supervisor(){
  return this.Editwish.get('co_supervisor');
}

get address_co_supervisor(){
  return this.Editwish.get('address_co_supervisor');
}

get co_supervisor_phone(){
  return this.Editwish.get('co_supervisor_phone');
}

get co_supervisor_email(){
  return this.Editwish.get('co_supervisor_email');
}


get cotutelle(){
  return this.Editwish.get('cotutelle');
}



onSubmit(){

  let data={
    "id": this.wish.id,
    "name":this.Editwish.get('name')?.value,
    "email":this.Editwish.get('email')?.value,
    "phone":this.Editwish.get('phone')?.value,
    "course":{
      "id": Number(this.Editwish.get('course')?.value)
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
    "establishment":this.Editwish.get('establishment')?.value,
    "department":this.Editwish.get('department')?.value,
    "center":this.Editwish.get('center')?.value,
    "head":this.Editwish.get('head')?.value,
    "structure":this.Editwish.get('structure')?.value,
    "headstructure":this.Editwish.get('head_structure')?.value,
    "supervisor":this.Editwish.get('supervisor')?.value,
    "siga":this.Editwish.get('siga')?.value,
    "apogee":this.Editwish.get('apogee')?.value,
    "dob":this.Editwish.get('dob')?.value,
    "place":this.Editwish.get('place')?.value,
    "cr":this.Editwish.get('cr')?.value,
    "nationality":this.Editwish.get('nationality')?.value,
    "address":this.Editwish.get('address')?.value,
    "degree":this.Editwish.get('degree')?.value,
    "qdegree":this.Editwish.get('q_degree')?.value,
    "qdegreeother":this.Editwish.get('q_degree_other')?.value,
    "thesissubject":this.Editwish.get('thesis_subject')?.value,
    "cosupervisor":this.Editwish.get('co_supervisor')?.value,
    "addresscosupervisor":this.Editwish.get('address_co_supervisor')?.value,
    "cosupervisorphone":this.Editwish.get('co_supervisor_phone')?.value,
    "cosupervisoremail":this.Editwish.get('co_supervisor_email')?.value,
    "cosupervision":this.Editwish.get('co_supervision')?.value,
    "marital":this.Editwish.get('marital')?.value,
    "gender":this.Editwish.get('gender')?.value,
    "salstatus":this.Editwish.get('sal_status')?.value,
    "bspeciality":this.Editwish.get('b_speciality')?.value,
    "byear":this.Editwish.get('b_year')?.value,
    "bestablishment":this.Editwish.get('b_establishment')?.value,
    "lspeciality":this.Editwish.get('l_speciality')?.value,
    "lyear":this.Editwish.get('l_year')?.value,
    "lestablishment":this.Editwish.get('l_establishment')?.value,
    "mspeciality":this.Editwish.get('m_speciality')?.value,
    "myear":this.Editwish.get('m_year')?.value,
    "mestablishment":this.Editwish.get('m_establishment')?.value,
    "ospeciality":this.Editwish.get('o_speciality')?.value,
    "oyear":this.Editwish.get('o_year')?.value,
    "oestablishment":this.Editwish.get('o_establishment')?.value,
    "lang1":this.Editwish.get('lang1')?.value,
    "lang2":this.Editwish.get('lang2')?.value,
    "lang3":this.Editwish.get('lang3')?.value,
    "lang4":this.Editwish.get('lang4')?.value,
    "lang1reading":this.Editwish.get('lang1_reading')?.value,
    "lang1writing":this.Editwish.get('lang1_writing')?.value,
    "lang1spoken":this.Editwish.get('lang1_spoken')?.value,
    "lang2reading":this.Editwish.get('lang2_reading')?.value,
    "lang2writing":this.Editwish.get('lang2_writing')?.value,
    "lang2spoken":this.Editwish.get('lang2_spoken')?.value,
    "lang3reading":this.Editwish.get('lang3_reading')?.value,
    "lang3writing":this.Editwish.get('lang3_writing')?.value,
    "lang3spoken":this.Editwish.get('lang3_spoken')?.value,
    "lang4reading":this.Editwish.get('lang4_reading')?.value,
    "lang4writing":this.Editwish.get('lang4_writing')?.value,
    "lang4spoken":this.Editwish.get('lang4_spoken')?.value,
    "r1name":this.Editwish.get('r1_name')?.value,
    "r1title":this.Editwish.get('r1_title')?.value,
    "r1address":this.Editwish.get('r1_address')?.value,
    "r2name":this.Editwish.get('r2_name')?.value,
    "r2title":this.Editwish.get('r2_title')?.value,
    "r2address":this.Editwish.get('r2_address')?.value,
    "r3name":this.Editwish.get('r3_name')?.value,
    "r3title":this.Editwish.get('r3_title')?.value,
    "r3address":this.Editwish.get('r3_address')?.value,
    "otherestablishments":this.Editwish.get('other_establishments')?.value,
    "otherestablishmentsyear":this.Editwish.get('other_establishments_year')?.value,
    "applicationrefused":this.Editwish.get('application_refused')?.value,
    "applicationrefusedreason":this.Editwish.get('application_refused_reason')?.value,
    "cotutelle":this.Editwish.get('cotutelle')?.value,
    "cotutellereason":this.Editwish.get('cotutelle_reason')?.value
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
//   this.Editwish.get('qualification')?.setValue("");
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
  if(this.Editwish.get("q_degree")?.value=="other"){
    return true;
  }
  else{
    return false;
  }

}

isOtherEstablishments(): boolean {
  if(this.Editwish.get("other_establishments")?.value=="yes"){
    return true;
  }
  else{
    return false;
  }

}

isApplicationRefused(): boolean {
  if(this.Editwish.get("application_refused")?.value=="yes"){
    return true;
  }
  else{
    return false;
  }

}

isCotutelle(): boolean{
  if(this.Editwish.get("cotutelle")?.value=="yes"){
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




// uploadFiles() {
//   for (const file of this.files1) {
//     this.addQualification(file.name);
//   }
//   this.files1 = [];
// }


getWish(){
  this.wishService.wishGetById(this.wishId).subscribe((results)=>{
    this.wish=results;
    console.log(this.wish);
    
    this.Editwish.get('course')?.setValue(this.wish.course.id);
    this.Editwish.get('name')?.setValue(this.wish.name);
    this.Editwish.get('email')?.setValue(this.wish.email);
    this.Editwish.get('phone')?.setValue(this.wish.phone);

    this.Editwish.get('establishment')?.setValue(this.wish.establishment);
    this.Editwish.get('department')?.setValue(this.wish.department);
    this.Editwish.get('center')?.setValue(this.wish.center);

    this.Editwish.get('head')?.setValue(this.wish.head);
    this.Editwish.get('structure')?.setValue(this.wish.structure);
    this.Editwish.get('head_structure')?.setValue(this.wish.headstructure);

    this.Editwish.get('supervisor')?.setValue(this.wish.supervisor);
    this.Editwish.get('siga')?.setValue(this.wish.siga);
    this.Editwish.get('apogee')?.setValue(this.wish.apogee);

    this.Editwish.get('dob')?.setValue(this.wish.dob);
    this.Editwish.get('place')?.setValue(this.wish.place);
    this.Editwish.get('cr')?.setValue(this.wish.cr);

    this.Editwish.get('nationality')?.setValue(this.wish.nationality);
    this.Editwish.get('address')?.setValue(this.wish.address);
    this.Editwish.get('degree')?.setValue(this.wish.degree);

    this.Editwish.get('q_degree')?.setValue(this.wish.qdegree);
    this.Editwish.get('q_degree_other')?.setValue(this.wish.qdegreeother);
    this.Editwish.get('thesis_subject')?.setValue(this.wish.thesissubject);

    this.Editwish.get('co_supervisor')?.setValue(this.wish.cosupervisor);
    this.Editwish.get('address_co_supervisor')?.setValue(this.wish.addresscosupervisor);
    this.Editwish.get('co_supervisor_phone')?.setValue(this.wish.cosupervisorphone);

    this.Editwish.get('co_supervisor_email')?.setValue(this.wish.cosupervisoremail);
    this.Editwish.get('co_supervision')?.setValue(this.wish.cosupervision);
    this.Editwish.get('marital')?.setValue(this.wish.marital);

    this.Editwish.get('gender')?.setValue(this.wish.gender);
    this.Editwish.get('sal_status')?.setValue(this.wish.salstatus);
    this.Editwish.get('b_speciality')?.setValue(this.wish.bspeciality);

    this.Editwish.get('b_year')?.setValue(this.wish.byear);
    this.Editwish.get('b_establishment')?.setValue(this.wish.bestablishment);
    this.Editwish.get('l_speciality')?.setValue(this.wish.lspeciality);

    this.Editwish.get('l_year')?.setValue(this.wish.lyear);
    this.Editwish.get('l_establishment')?.setValue(this.wish.lestablishment);
    this.Editwish.get('m_speciality')?.setValue(this.wish.mspeciality);

    this.Editwish.get('m_year')?.setValue(this.wish.myear);
    this.Editwish.get('m_establishment')?.setValue(this.wish.mestablishment);
    this.Editwish.get('o_speciality')?.setValue(this.wish.ospeciality);

    this.Editwish.get('o_year')?.setValue(this.wish.oyear);
    this.Editwish.get('o_establishment')?.setValue(this.wish.oestablishment);
    this.Editwish.get('lang1')?.setValue(this.wish.lang1);

    this.Editwish.get('lang2')?.setValue(this.wish.lang2);
    this.Editwish.get('lang3')?.setValue(this.wish.lang3);
    this.Editwish.get('lang4')?.setValue(this.wish.lang4);

    this.Editwish.get('lang1_reading')?.setValue(this.wish.lang1reading);
    this.Editwish.get('lang1_writing')?.setValue(this.wish.lang1writing);
    this.Editwish.get('lang1_spoken')?.setValue(this.wish.lang1spoken);

    this.Editwish.get('lang2_reading')?.setValue(this.wish.lang2reading);
    this.Editwish.get('lang2_writing')?.setValue(this.wish.lang2writing);
    this.Editwish.get('lang2_spoken')?.setValue(this.wish.lang2spoken);

    this.Editwish.get('lang3_reading')?.setValue(this.wish.lang3reading);
    this.Editwish.get('lang3_writing')?.setValue(this.wish.lang3writing);
    this.Editwish.get('lang3_spoken')?.setValue(this.wish.lang3spoken);


    this.Editwish.get('lang4_reading')?.setValue(this.wish.lang4reading);
    this.Editwish.get('lang4_writing')?.setValue(this.wish.lang4writing);
    this.Editwish.get('lang4_spoken')?.setValue(this.wish.lang4spoken);

    this.Editwish.get('r1_name')?.setValue(this.wish.r1name);
    this.Editwish.get('r1_title')?.setValue(this.wish.r1title);
    this.Editwish.get('r1_address')?.setValue(this.wish.r1address);

    this.Editwish.get('r2_name')?.setValue(this.wish.r2name);
    this.Editwish.get('r2_title')?.setValue(this.wish.r2title);
    this.Editwish.get('r2_address')?.setValue(this.wish.r2address);

    this.Editwish.get('r3_name')?.setValue(this.wish.r3name);
    this.Editwish.get('r3_title')?.setValue(this.wish.r3title);
    this.Editwish.get('r3_address')?.setValue(this.wish.r3address);

    this.Editwish.get('other_establishments')?.setValue(this.wish.otherestablishments);
    this.Editwish.get('other_establishments_year')?.setValue(this.wish.otherestablishmentsyear);
    this.Editwish.get('application_refused')?.setValue(this.wish.applicationrefused);
    this.Editwish.get('application_refused_reason')?.setValue(this.wish.applicationrefusedreason);
    this.Editwish.get('cotutelle')?.setValue(this.wish.cotutelle);
    this.Editwish.get('cotutelle_reason')?.setValue(this.wish.cotutellereason);


  for(var i=0;i<this.wish.files.length;i++){
    const base64Data = this.wish.files[i].data; 
    const type = this.wish.files[i].type;
    const blob = this.base64ToBlob(base64Data, type);
    const file = new File([blob], this.wish.files[i].name);
    const fileHandle: FileHandle = {
      file:file,
      url: this.sanitize.bypassSecurityTrustUrl(
        window.URL.createObjectURL(file)
      )
    }
    this.files.push(fileHandle);
  }

  for(var i=0;i<this.wish.files1.length;i++){
    const base64Data = this.wish.files1[i].data; 
    const type = this.wish.files1[i].type;
    const blob = this.base64ToBlob(base64Data, type);
    const file = new File([blob], this.wish.files1[i].name);
    const fileHandle: FileHandle = {
      file:file,
      url: this.sanitize.bypassSecurityTrustUrl(
        window.URL.createObjectURL(file)
      )
    }
    this.files1.push(fileHandle);
  }

  for(var i=0;i<this.wish.files2.length;i++){
    const base64Data = this.wish.files2[i].data; 
    const type = this.wish.files2[i].type;
    const blob = this.base64ToBlob(base64Data, type);
    const file = new File([blob], this.wish.files2[i].name);
    const fileHandle: FileHandle = {
      file:file,
      url: this.sanitize.bypassSecurityTrustUrl(
        window.URL.createObjectURL(file)
      )
    }
    this.files2.push(fileHandle);
  }

  for(var i=0;i<this.wish.files3.length;i++){
    const base64Data = this.wish.files3[i].data; 
    const type = this.wish.files3[i].type;
    const blob = this.base64ToBlob(base64Data, type);
    const file = new File([blob], this.wish.files3[i].name);
    const fileHandle: FileHandle = {
      file:file,
      url: this.sanitize.bypassSecurityTrustUrl(
        window.URL.createObjectURL(file)
      )
    }
    this.files3.push(fileHandle);
  }

  for(var i=0;i<this.wish.files4.length;i++){
    const base64Data = this.wish.files4[i].data; 
    const type = this.wish.files4[i].type;
    const blob = this.base64ToBlob(base64Data, type);
    const file = new File([blob], this.wish.files4[i].name);
    const fileHandle: FileHandle = {
      file:file,
      url: this.sanitize.bypassSecurityTrustUrl(
        window.URL.createObjectURL(file)
      )
    }
    this.files4.push(fileHandle);
  }

  for(var i=0;i<this.wish.files5.length;i++){
    const base64Data = this.wish.files5[i].data; 
    const type = this.wish.files5[i].type;
    const blob = this.base64ToBlob(base64Data, type);
    const file = new File([blob], this.wish.files5[i].name);
    const fileHandle: FileHandle = {
      file:file,
      url: this.sanitize.bypassSecurityTrustUrl(
        window.URL.createObjectURL(file)
      )
    }
    this.files5.push(fileHandle);
  }

  for(var i=0;i<this.wish.files6.length;i++){
    const base64Data = this.wish.files6[i].data; 
    const type = this.wish.files6[i].type;
    const blob = this.base64ToBlob(base64Data, type);
    const file = new File([blob], this.wish.files6[i].name);
    const fileHandle: FileHandle = {
      file:file,
      url: this.sanitize.bypassSecurityTrustUrl(
        window.URL.createObjectURL(file)
      )
    }
    this.files6.push(fileHandle);
  }

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

downloadImage1(i:any): void {
  const base64Data = this.wish.files1[i].data; 
  const type = this.wish.files1[i].type;
  const blob = this.base64ToBlob(base64Data, type);
  const file = new File([blob], this.wish.files1[i].name);
  
  const link = document.createElement('a');
  link.href = URL.createObjectURL(file);
  link.download = this.wish.files1[i].name;
  link.click();

}

downloadImage2(i:any): void {
  const base64Data = this.wish.files2[i].data; 
  const type = this.wish.files2[i].type;
  const blob = this.base64ToBlob(base64Data, type);
  const file = new File([blob], this.wish.files2[i].name);
  
  const link = document.createElement('a');
  link.href = URL.createObjectURL(file);
  link.download = this.wish.files2[i].name;
  link.click();

}

downloadImage3(i:any): void {
  const base64Data = this.wish.files3[i].data; 
  const type = this.wish.files3[i].type;
  const blob = this.base64ToBlob(base64Data, type);
  const file = new File([blob], this.wish.files3[i].name);
  
  const link = document.createElement('a');
  link.href = URL.createObjectURL(file);
  link.download = this.wish.files3[i].name;
  link.click();

}

downloadImage4(i:any): void {
  const base64Data = this.wish.files4[i].data; 
  const type = this.wish.files4[i].type;
  const blob = this.base64ToBlob(base64Data, type);
  const file = new File([blob], this.wish.files4[i].name);
  
  const link = document.createElement('a');
  link.href = URL.createObjectURL(file);
  link.download = this.wish.files4[i].name;
  link.click();

}

downloadImage5(i:any): void {
  const base64Data = this.wish.files5[i].data; 
  const type = this.wish.files5[i].type;
  const blob = this.base64ToBlob(base64Data, type);
  const file = new File([blob], this.wish.files5[i].name);
  
  const link = document.createElement('a');
  link.href = URL.createObjectURL(file);
  link.download = this.wish.files5[i].name;
  link.click();

}

downloadImage6(i:any): void {
  const base64Data = this.wish.files6[i].data; 
  const type = this.wish.files6[i].type;
  const blob = this.base64ToBlob(base64Data, type);
  const file = new File([blob], this.wish.files6[i].name);
  
  const link = document.createElement('a');
  link.href = URL.createObjectURL(file);
  link.download = this.wish.files6[i].name;
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