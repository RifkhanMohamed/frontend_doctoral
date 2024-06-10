import { Component } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-maths-lab',
  templateUrl: './maths-lab.component.html',
  styleUrls: ['./maths-lab.component.css']
})
export class MathsLabComponent {
  constructor(private router: Router){
  }
details=[
{
  id:1,
  image:'./../../../../../assets/images/maths.png',
  director:'YAHYAI Mohamed',
  list:[
    {
      name:'Prof. AKHIAT Fettah',
      email:'fettah.akhiat@uit.ac.ma'
    },
    {
      name:'Prof. AMRI Mohamed Amin',
      email:'mohammedamin.amri@uit.ac.ma'
    },
    {
      name:'Prof. BENSOUDA Charaf',
      email:'charaf.bensouda@uit.ac.ma'
    },
    {
      name:'Pr. BOUALI Said',
      email:'said.bouali@uit.ac.ma'
    },
    {
      name:'Pr. BOUNADER Nordine',
      email:'nordine.bounader@uit.ac.ma'
    },
    {
      name:'Pr. BOUSSEJRA Abdelhamid',
      email:'boussejra.abdelhamid@uit.ac.ma'
    },
    {
      name:'Prof. ECH-CHAD Mohamed',
      email:'mohamed.ech-chad@uit.ac.ma'
    }
  ]
},
{
  id:2,
  image:'./../../../../../assets/images/maths1.png',
  director:'Professor KABBAJ Samir',
  list:[
    {
      name:'Prof. ABDELHAK Ahmed',
      email:'ahmed.abdelhak@uit.ac.ma'
    },
    {
      name:'Prof. AIT SIBAHA Mohammed',
      email:'mohammed.aitsibaha@uit.ac.ma'
    },
    {
      name:'Prof. AMEZIANE HASSANI Souad',
      email:'souad.amezianhassani@uit.ac.ma'
    },
    {
      name:'Prof. ASSERDA Said',
      email:'said.asserda@uit.ac.ma'
    },
    {
      name:'Pr. BELMAHJOUB Faycal',
      email:'faycal.belmahjoub@uit.ac.ma'
    },
    {
      name:'Prof. BENYAICHE Allami',
      email:'allami.benyaiche@uit.ac.ma'
    },
    {
      name:'Prof. BERGOUT Mohamed',
      email:'mohamed.berghout@uit.ac.ma'
    },
    {
      name:'Pr. BOUKRIM Lahcen',
      email:'lahcen.boukrim@uit.ac.ma'
    },
    {
      name:'Prof. EL FATINI Mohamed',
      email:'mohamed.elfatini@uit.ac.ma'
    },
    {
      name:'Pr. EL GOURARI Aiad',
      email:'aiad.elgourari@uit.ac.ma'
    }
  ]
}
]   
  reDirect(id:Number){
    const itemWithId1 = this.details.find(item => item.id === id);
    const queryParams: any = {};
    queryParams.myArray = JSON.stringify(itemWithId1);
    const navigationExtras: NavigationExtras = {
      queryParams
    };
    this.router.navigate(['/detail-lab'], navigationExtras);
  }
}
