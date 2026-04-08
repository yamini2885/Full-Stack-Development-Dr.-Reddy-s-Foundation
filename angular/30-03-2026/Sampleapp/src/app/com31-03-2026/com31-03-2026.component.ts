import { Component } from '@angular/core';

@Component({
  selector: 'app-com31-03-2026',
  templateUrl: './com31-03-2026.component.html',
  styleUrl: './com31-03-2026.component.css'
})
export class Com31032026Component {
  name:string = "hi this is yamini";

  imgUrl:String = "https://tse4.mm.bing.net/th/id/OIP.U6Jb8PtxBgQU3GPDsXgxvwHaLI?rs=1&pid=ImgDetMain&o=7&rm=3";

  imgUrl2:any;

  display(){
    this.imgUrl2="https://lh3.googleusercontent.com/jdeelWVd9Hy0aMnHjSKGVcF45YN69H-8IDkReUWqWwforwuiy8DGn2ZKVzSH8H0Il9SqotULSLQChi5kjtC136ta10z0vMZkYRjZxMabraa2nQ=w960-rj-nu-e365"; 
  }

  // counter
  i:number=0;

  increase(){
    this.i++;
  }
  decrease(){
    this.i--;
  }
}
