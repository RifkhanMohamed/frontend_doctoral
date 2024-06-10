import { Component } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-geology-lab',
  templateUrl: './geology-lab.component.html',
  styleUrls: ['./geology-lab.component.css']
})
export class GeologyLabComponent {
  constructor(private router: Router){
  }
details=[
{
  id:1,
  image:'./../../../../../assets/images/Geology.png',
  director:'Prof. BOUABDLI Abdelhak',
  list:[
    {
      name:'Prof. AIT FORA Abderrahman',
      email:'abderrahman.aitfora@uit.ac.ma'
    },
    {
      name:'Prof. ALLOUZA Mohamed',
      email:'mohamed.allouza@uit.ac.ma'
    },
    {
      name:'Prof. BEJJAJI Zohra',
      email:'zohra.bejjaji@uit.ac.ma'
    },
    {
      name:'Prof. BENABBOU Malika',
      email:'malika.benabbou@uit.ac.ma'
    },
    {
      name:'Prof. BENAMMI Mohamed',
      email:'mohammed.benammi@uit.ac.ma'
    },
    {
      name:'Prof. BENMESBAH Abdelilah',
      email:'abdelilah.benmesbah@uit.ac.ma'
    },
    {
      name:'Pr. BOUABDLI Abdelhak',
      email:'bouabdli@uit.ac.ma'
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
