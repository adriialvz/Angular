import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngswitch',
  templateUrl: './ngswitch.component.html',
  styleUrls: ['./ngswitch.component.css']
})
export class NgswitchComponent implements OnInit {

  color : string = "azul"
  texto : string = "Esto es un texto escrito con la directiva ngswitch"
  contador : number = 0;

  constructor() { }

  ngOnInit() {
  }

  public cambiarColor(){
    this.contador++
    
    if(this.contador == 1){
      this.color = "rojo"
    }else if(this.contador == 2){
      this.color = "verde"
    }else if(this.contador == 3){
      this.color = "azul"
    }else{
      this.color = "no definido"
      this.contador = 0
    }
  }

}
