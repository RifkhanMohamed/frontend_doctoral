import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/login/service/login.service';
import { WishService } from 'src/app/wish/service/wish.service';

@Component({
  selector: 'app-modify-wish',
  templateUrl: './modify-wish.component.html',
  styleUrls: ['./modify-wish.component.css']
})
export class ModifyWishComponent {
  constructor(private loginService:LoginService,private router: Router,private wishService:WishService){
    this.getWish();
  }
  wish: any=[];
  key: string='id';
  reverse:boolean=false;
  p:number=1;
  getWish(){
    this.wishService.wishGetByUser(JSON.parse(localStorage.getItem("user")|| '{}').email).subscribe((results)=>{
      this.wish=results;
    });

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
}
