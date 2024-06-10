import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail-lab',
  templateUrl: './detail-lab.component.html',
  styleUrls: ['./detail-lab.component.css']
})
export class DetailLabComponent implements OnInit{

 biology:any =[];
 director:any;
 image:any;
 list:any;

 ngOnInit(): void {

}

constructor(private activatedRoute: ActivatedRoute){

  const myArray = this.activatedRoute.snapshot.queryParamMap.get('myArray');

  if (myArray === null) {
    this.biology = [];
  } else {
    this.biology = JSON.parse(myArray);
    console.log(this.biology.image);
    this.director=this.biology.director;
    this.image=this.biology.image;
    this.list=this.biology.list;
  }
}
}
