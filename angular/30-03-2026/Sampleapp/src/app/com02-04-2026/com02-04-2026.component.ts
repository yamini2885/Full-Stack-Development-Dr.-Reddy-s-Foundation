import { Component } from '@angular/core';

@Component({
  selector: 'app-com02-04-2026',
  templateUrl: './com02-04-2026.component.html',
  styleUrl: './com02-04-2026.component.css'
})
export class Com02042026Component {

  str="hello World! welcome to Angular";
  d = new Date();
  price = 45000;
  num= 0.45821;
  obj={
    firstname:"bhaskara",
    lastName:"ch"
  }
  arr=[1,2,3,4,5]

  a=6
  
  apromise = new Promise((res,rej)=> {
    setTimeout(()=>{
      res("hello world")
    },5000)
  })
  
}
