import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/login/service/login.service';
import { WishService } from 'src/app/wish/service/wish.service';
import * as pdfMake from 'pdfmake/build/pdfMake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts'; 
import { ModifyWishService } from '../../service/modify-wish.service';

(pdfMake as any).vfs = pdfFonts.pdfMake.vfs;
@Component({
  selector: 'app-modify-wish',
  templateUrl: './modify-wish.component.html',
  styleUrls: ['./modify-wish.component.css']
})
export class ModifyWishComponent {
  isCommittee=false;
  isUser=false;
  constructor(private loginService:LoginService,private router: Router,private wishService:WishService,private modifyService:ModifyWishService){
    this.getWish();
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


  sendInvitation(email:any,name:any) {
    const to = email;
    const subject = 'Invitation to the competition';
    const text = 'Hi '+name+' You have been invited to the competition. Please check your account for more details.';

    this.modifyService.sendEmail(to, subject, text).subscribe(response => {
      console.log('Email sent successfully', response);
    }, error => {
      console.error('Error sending email', error);
    });
  }

  wish: any=[];
  key: string='id';
  reverse:boolean=false;
  p:number=1;
  isDownload:boolean=false;
  getWish(){
    if(JSON.parse(localStorage.getItem("user")|| '{}').role[0].role_name=="user"){
      this.wishService.wishGetByUser(JSON.parse(localStorage.getItem("user")|| '{}').email).subscribe((results)=>{
        this.wish=results;
        const appliedWish = this.wish.find((item: { status: string; }) => item.status === 'applied');
  
  
    if (appliedWish) {
      this.isDownload=true;
    } else {
      this.isDownload=false;
    }
      });
    }


    if(JSON.parse(localStorage.getItem("user")|| '{}').role[0].role_name=="committee"){
      this.wishService.wishGetAll().subscribe((results)=>{
        this.wish=results;
    //     const appliedWish = this.wish.find((item: { status: string; }) => item.status === 'applied');
  
  
    // if (appliedWish) {
    //   this.isDownload=true;
    // } else {
    //   this.isDownload=false;
    // }
      });
    }


  }

  sort(key: any){
    this.key=key;
    this.reverse=!this.reverse;
  }

  reDirect(wish:any){
    this.router.navigate(['/edit-wish'],{ queryParams: { wish: wish } });
  }

  downloadImage(i:any,j:any): void {
    const base64Data = this.wish[i].files[j].data; 
    const type = this.wish[i].files[j].type;
    const blob = this.base64ToBlob(base64Data, type);
    const file = new File([blob], this.wish[i].files[j].name);
  
    const link = document.createElement('a');
    link.href = URL.createObjectURL(file);
    link.download = this.wish[i].files[j].name;
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

  onSubmit(){
    this.wishService.wishUpdateStatusByUser(JSON.parse(localStorage.getItem("user")|| '{}').email).subscribe((results)=>{
      // this.wish=results;
      window.location.reload();
    });
  }

  onDownload(){

    var tableRows = [
      // Header row
      [
        { text: 'Course', style: 'tableHeader' },
        { text: 'Department', style: 'tableHeader' },
        { text: 'Establishment', style: 'tableHeader' },
        { text: 'Status', style: 'tableHeader' }
      ]
    ];
    
    // Populate the table body with data from the 'wish' array
    this.wish.forEach((data:any) => {
      var rowData = [
        data.course.name,
        data.department,
        data.establishment,
        data.status,
      ];
      tableRows.push(rowData);
    });

    var docDef = {
      content: [
        {
          columns: [

            {
              // auto-sized columns have their widths based on their content
               image:'data:image/jpeg;base64,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',
              width: 100,
              height:70
            },
            {
              text:"",
              width:50
            },
            {
              // star-sized columns fill the remaining space
              // if there's more than one star-column, available width is divided equally
              fontSize: 40,
              text: 'Doctoral School',
              bold: true,
              color: 'blue'
            }
          ],
          // optional space between columns
          // columnGap: 10
        },
        { text: '----------------------------------------------------------------------------------------------------------------------------', fontSize: 15 },
        { columns: [

          {
            text:"Name",
            width:100,
            fontSize: 15
          },
          {
            text:":-",
            width:30,
            fontSize: 15
          },
          {
            text:JSON.parse(localStorage.getItem("user")|| '{}').name,
            bold: true,
            fontSize: 15
          }
        ]
      },
      { columns: [

        {
          text:"Email",
          width:100,
          fontSize: 15
        },
        {
          text:":-",
          width:30,
          fontSize: 15
        },
        {
          text:JSON.parse(localStorage.getItem("user")|| '{}').email,
          bold: true,
          fontSize: 15
        }
      ]
    },
    { columns: [

      {
        text:"Phone",
        width:100,
        fontSize: 15
      },
      {
        text:":-",
        width:30,
        fontSize: 15
      },
      {
        text:JSON.parse(localStorage.getItem("user")|| '{}').phone,
        bold: true,
        fontSize: 15
      }
    ]
  },
  { columns: [

    {
      text:"Address",
      width:100,
      fontSize: 15
    },
    {
      text:":-",
      width:30,
      fontSize: 15
    },
    {
      text:JSON.parse(localStorage.getItem("user")|| '{}').address.address_line1+', '+JSON.parse(localStorage.getItem("user")|| '{}').address.street+', '+JSON.parse(localStorage.getItem("user")|| '{}').address.town+', '+JSON.parse(localStorage.getItem("user")|| '{}').address.country,
      bold: true,
      fontSize: 15
    }
  ],
},{
  text:'Applied Course Wishes',
  marginTop: 30,
  bold: true,
  fontSize: 15,
  color: 'blue'
},
{
  marginTop: 30,
  table: {
    
    headerRows: 1,
    widths: [170,100 , 150, 50],
    body: tableRows
  },
  layout: 'lightHorizontalLines'
},
{
      marginTop: 20,
      text:"Note :-",
      fontSize: 15,
      color: 'red',
      bold: true
},
{
  marginTop: 30,
  text:"Dear Candidate,",
  fontSize: 15,
  bold: true
},
{
  marginTop: 10,
  text:"We are writing to acknowledge receipt of your submission. Please retain this receipt for your records. Our team will review your application thoroughly, and if you are selected to proceed to the next steps, you will be contacted via email.",
  fontSize: 15,
},
{
  marginTop: 10,
  text:"Thank you for your interest in Doctoral School. We appreciate the time and effort you have invested in applying for the position.",
  fontSize: 15,
},
{
  marginTop: 20,
  text:"Best regards,",
  fontSize: 15,
},{
  marginTop: 10,
  text:"HR Manager",
  fontSize: 15,
  bold: true,
  color: 'blue'
},
      ],
      styles: {
        tableHeader: {
          bold: true,
          fillColor: '#CCCCCC'
        }
      }
    };
    
    pdfMake.createPdf(docDef).open();


  }

  
}
