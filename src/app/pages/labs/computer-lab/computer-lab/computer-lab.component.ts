import { Component } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-computer-lab',
  templateUrl: './computer-lab.component.html',
  styleUrls: ['./computer-lab.component.css']
})
export class ComputerLabComponent {
  constructor(private router: Router){
  }
details=[
{
  id:1,
  image:'./../../../../../assets/images/computer.jpeg',
  director:'FAKHRI Youssef',
  list:[
    {
      name:'Prof. ABOUCHABAKA Jaafar',
      email:'jaafar.abouchabaka@uit.ac.ma'
    },
    {
      name:'Pr. ALAMI CHENTOUFI Jihane',
      email:'j.alami@uit.ac.ma'
    },
    {
      name:'Prof. AMEUR El Bachir',
      email:'elbachir.ameur@uit.ac.ma'
    },
    {
      name:'Prof. AMNAI Mohamed',
      email:'mohamed.amnai@uit.ac.ma'
    },
    {
      name:'Prof. AZZOUZI Salma',
      email:'salma.azzouzi@uit.ac.ma'
    },
    {
      name:'Prof. BENATTOU Mohammed',
      email:'mohammed.benattou@uit.ac.ma'
    },
    {
      name:'Prof. BENLHACHMI Khalid',
      email:'khalid.benlhachmi@uit.ac.ma'
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
