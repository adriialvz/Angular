import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-Componente_section',
  templateUrl: './Componente_section.component.html',
  styleUrls: ['./Componente_section.component.css']
})
export class Componente_sectionComponent implements OnInit {

 //PROPIEDADES 
 nombre: string;
 edad: number;
 peso: number;//En kg

 //ROPIEDADES PROPERTY BYNDING
 botonDeshabilitado = false
 botonOculto = "display:block"                //block para mostrar, none para ocultar
 
 //PROPIEDADES TWO WAY BINDING
 profesion = "arquitecto"

 constructor() { 
   this.nombre = "Steve Rogers"
   this.edad = 40
   this.peso = 95
 }

 ngOnInit() {
 }

 public convertirPesoALibras() : number{
   var libras = this.peso * 2.2046
   return libras
 }

 //EVENT BINDING
 public cambiarEstadoHabilitado() : void{
   this.botonDeshabilitado = !this.botonDeshabilitado;
 }

 public cambiarEstadoOculto(){
   if(this.botonOculto == "display:block"){
     this.botonOculto = "display:none"                    //ocultar
   }else{
     this.botonOculto = "display:block"                    //mostrar
   }
 }
} 
