import { Component } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-chemistry-lab',
  templateUrl: './chemistry-lab.component.html',
  styleUrls: ['./chemistry-lab.component.css']
})
export class ChemistryLabComponent {
  constructor(private router: Router){
  }
details=[
{
  id:1,
  image:'./../../../../../assets/images/chemistry.png',
  director:'GUEDIRA Taoufiq',
  list:[
    {
      name:'Prof. BENALI Omar',
      email:'benali.omar@uit.ac.ma'
    },
    {
      name:'Prof. BENNANI ZIATNI Mounia',
      email:'mounia.bennaniziatni@uit.ac.ma'
    },
    {
      name:'Pr. CHAOUCH Abdelaziz',
      email:'abdelaziz.chaouch@uit.ac.ma'
    },
    {
      name:'Prof. CHEIKHI Nabil',
      email:'nabil.cheikhi@uit.ac.ma'
    },
    {
      name:'Pr. CHERKAOUI Mohammed',
      email:'cherkaoui.mohammed@uit.ac.ma'
    },
    {
      name:'Pr. EJJIYAR Soumeya',
      email:'soumeya.ejjiyar@uit.ac.ma'
    },
    {
      name:'Pr. EL AOUFIR Yasmina',
      email:'yasmina.elaoufir1@uit.ac.ma'
    }
  ]
},
{
  id:2,
  image:'./../../../../../assets/images/chemistry1.png',
  director:'Pr. TAKY Mohamed',
  list:[
    {
      name:'Pr. AMELLAL Ahmed',
      email:'ahmed.amellal@uit.ac.ma'
    },
    {
      name:'Pr. AMOR Zakia',
      email:'zakia.amor@uit.ac.ma'
    },
    {
      name:'Pr. BELFAQUIR Mustapha',
      email:'belfaquir.mustapha@uit.ac.ma'
    },
    {
      name:'Pr. BOUZAKRAOUI Said',
      email:'bouzakraoui@uit.ac.ma'
    },
    {
      name:'Pr. CHAFIK EL IDRISSI Brahim',
      email:'brahim.chafikelidrissi@uit.ac.ma'
    },
    {
      name:'Pr. CHAHINE Abdelkrim',
      email:'abdelkrim.chahine@uit.ac.ma'
    },
    {
      name:'Pr. CHERKAOUI Hassan',
      email:'hassan.cherkaoui@uit.ac.ma'
    },
    {
      name:'Pr. DKHIRECHE Nadia',
      email:'nadia.dkhireche@uit.ac.ma'
    },
    {
      name:'Pr. EL AMRANI Mahacine',
      email:'mahacine.elamrani@uit.ac.ma'
    },
    {
      name:'Pr. EL BOUCHIKHI Abdeslam',
      email:'abdeslam.elbouchikhi@uit.ac.ma'
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
