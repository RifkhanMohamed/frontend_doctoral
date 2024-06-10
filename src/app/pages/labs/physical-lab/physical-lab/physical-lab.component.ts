import { Component } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-physical-lab',
  templateUrl: './physical-lab.component.html',
  styleUrls: ['./physical-lab.component.css']
})
export class PhysicalLabComponent {
  constructor(private router: Router){
  }
details=[
{
  id:1,
  image:'./../../../../../assets/images/physics.png',
  director:'Professor CHAKIR El Mahjoub',
  list:[
    {
      name:'Prof. AABOUD Mourad',
      email:'morad.aaboud@uit.ac.ma'
    },
    {
      name:'Prof. ALIBRAHMI Elmehdi',
      email:'alibrahimi.elmehdi@uit.ac.ma'
    },
    {
      name:'Prof. BENDOUMOU Abdallah',
      email:'bendoumou.abdellah@uit.ac.ma'
    },
    {
      name:'Prof. BENNANI Faical',
      email:'faical.bennani@uit.ac.ma'
    },
    {
      name:'Pr. BERRADA Az Elarab',
      email:'azelarab.berrada@uit.ac.ma'
    },
    {
      name:'Pr. BOUCETTA Abdelkhalek',
      email:'abdelkhalek.boucetta@uit.ac.ma'
    },
    {
      name:'Pr. CHAKIR El Mahjoub',
      email:'elmahjoub.chakir@uit.ac.ma'
    }
  ]
},
{
  id:2,
  image:'./../../../../../assets/images/physics1.jpeg',
  director:'Pr. AGGOUR Mohammed',
  list:[
    {
      name:'Pr. AGGOUR Mohammed',
      email:'mohammed.aggour@uit.ac.ma'
    },
    {
      name:'Pr. AHD Mohamed',
      email:'mohamed.ahd@uit.ac.ma'
    },
    {
      name:'Pr. DAOUCHI Brahim',
      email:'brahim.daouchi@uit.ac.ma'
    },
    {
      name:'Pr. DIYADI Jaouad',
      email:'diyadi@uit.ac.ma'
    },
    {
      name:'Pr. DLIMI Latifa',
      email:'latifa.dlimi@uit.ac.ma'
    },
    {
      name:'Pr. EL BARI Hassan',
      email:'elbari.hassan@uit.ac.ma'
    },
    {
      name:'Pr. EL FAYLALI Hanan',
      email:'hanan.elfaylali@uit.ac.ma'
    },
    {
      name:'Pr. EL MERABET Youssef',
      email:'youssef.elmerabet@uit.ac.ma'
    },
    {
      name:'Pr. HABIBI Mohamed',
      email:'habibi.mohamed@uit.ac.ma'
    },
    {
      name:'Pr. HADJOUDJA Abdelkader',
      email:'abdelkader.hadjoudja@uit.ac.ma'
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
