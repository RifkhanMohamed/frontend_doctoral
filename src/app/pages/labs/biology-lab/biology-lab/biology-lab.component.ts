import { Component } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-biology-lab',
  templateUrl: './biology-lab.component.html',
  styleUrls: ['./biology-lab.component.css']
})
export class BiologyLabComponent {

  constructor(private router: Router){
  }
details=[
{
  id:1,
  image:'./../../../../../assets/images/biology.jpeg',
  director:'MESFIOUI Abdelhalem',
  list:[
    {
      name:'Prof. ABOUSSALEH Youssef',
      email:'youssef.aboussaleh@uit.ac.ma'
    },
    {
      name:'Prof. AGUENAOU Hassan',
      email:'aguenaou.hassan@uit.ac.ma'
    },
    {
      name:'Prof. AHAMI Ahmed',
      email:'ahmed.ahami@uit.ac.ma'
    },
    {
      name:'Prof. AKHOUAYRI Omar',
      email:'omar.akhouayri@uit.ac.ma'
    },
    {
      name:'Pr. ATTARASSI Benaissa',
      email:'attarassi.benaissa@uit.ac.ma'
    },
    {
      name:'Prof. AUAJJAR Nabila',
      email:'nabila.auajjar@uit.ac.ma'
    },
    {
      name:'Prof. AZZAOUI Fatima Zahra',
      email:'fatimazahra.azzaoui@uit.ac.ma'
    },
    {
      name:'Prof. BENAZZOUZ Bouchra',
      email:'bouchra.benazzouz@uit.ac.ma'
    },
    {
      name:'Prof. BENCHACHO Mohammed',
      email:'mohammed.benchacho@uit.ac.ma'
    },
    {
      name:'Prof. BENKIRANE Hasnae',
      email:'benkirane.hasnae@uit.ac.ma'
    },
    {
      name:'Prof. BENKIRANE Ouafae',
      email:'ouafae.benkirane@uit.ac.ma'
    },
    {
      name:'Prof. BERNY El Hassan',
      email:'elhassan.berny@uit.ac.ma'
    },
    {
      name:'Pr. BIKJDAOUENE Leila',
      email:'leila.bikjdaouene@uit.ac.ma'
    },
    {
      name:'Prof. BOUR Abdellatif',
      email:'abdellatif.bour@uit.ac.ma'
    },
    {
      name:'Pr. BOUTAYEB Soraya',
      email:'soraya.boutayeb@uit.ac.ma'
    },
    {
      name:'Pr. CHAHBOUNE Mohamed',
      email:''
    },
    {
      name:'Pr. EL BACHA Siham',
      email:'siham.elbacha@uit.ac.ma'
    },
    {
      name:'Prof. EL GHISSASSI Mohammed',
      email:'mohammed.elghissassi@uit.ac.ma'
    },
    {
      name:'Prof. EL HALOUI Nour-eddine',
      email:'n.elhaloui@uit.ac.ma'
    }
  ]
},
{
  id:2,
  image:'./../../../../../assets/images/biology2.png',
  director:'Pr DOUIRA Allal',
  list:[
    {
      name:'Pr. BELAHBIB Nadia',
      email:'nadia.belahbib@uit.ac.ma'
    },
    {
      name:'Prof. BENALI Doha',
      email:'doha.benali@uit.ac.ma'
    },
    {
      name:'Prof. BENKIRANE Rachid',
      email:'rachid.benkirane@uit.ac.ma'
    },
    {
      name:'Pr. BOURKHISS Brahim',
      email:'brahim.bourkhiss@uit.ac.ma'
    },
    {
      name:'Prof. BRHADDA Najiba',
      email:'najiba.brhadda@uit.ac.ma'
    },
    {
      name:'Pr. DAHMANI Jamila',
      email:'jamila.dahmani@uit.ac.ma'
    },
    {
      name:'Pr. DOUIRA Allal',
      email:'allal.douira@uit.ac.ma'
    },
    {
      name:'Prof. GMIRA Najib',
      email:'najib.gmira@uit.ac.ma'
    },
    {
      name:'Prof. IBRIZ Mohammed',
      email:'m_ibriz@yahoo.fr'
    },
    {
      name:'Prof. ICHIR Lalla Laaziza',
      email:'lallalaaziza.ichir@uit.ac.ma'
    },
    {
      name:'Prof. MOURIA Afifa',
      email:'afifa.mouria@uit.ac.ma'
    },
    {
      name:'Pr. OUAZZANI TOUHAMI Amina',
      email:'amina.ouazzanitouhami@uit.ac.ma'
    }
  ]
},
{
  id:3,
  image:'./../../../../../assets/images/biology3.jpeg',
  director:'Prof. OUHSSINE Mohammed',
  list:[
    {
      name:'Pr. AKALLAL Rachida',
      email:'rachida.akallal@uit.ac.ma'
    },
    {
      name:'Prof. AOUANE El Mahjoub',
      email:'elmahjoub.aouane@uit.ac.ma'
    },
    {
      name:'Pr. BAKALI Raifa',
      email:'raifa.bakali@uit.ac.ma'
    },
    {
      name:'Pr. BELGHYTI Driss',
      email:'driss.belghyti@uit.ac.ma'
    },
    {
      name:'Prof. BEN MOHAMMADI Aicha',
      email:'aicha.benmohammadi@uit.ac.ma'
    },
    {
      name:'Prof. BENHARBIT Oumaima',
      email:'oumaima.benharbit@uit.ac.ma'
    },
    {
      name:'Prof. BENNASSER Laila',
      email:'laila.bennasser@uit.ac.ma'
    },
    {
      name:'Prof. BENZAKOUR Abderrahim',
      email:'abderrahim.benzakour@uit.ac.ma'
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
