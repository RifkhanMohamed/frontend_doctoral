export class Course{
    id:number;
    name:string;
  disabled: boolean;
  isEnroll: string;


    constructor(id:number,name: string,disabled:boolean,isEnroll:string){
        this.id=id;
        this.name=name;
        this.disabled=disabled;
        this.isEnroll=isEnroll;
    }
}