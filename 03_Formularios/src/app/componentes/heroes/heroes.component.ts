import { Component, OnInit } from '@angular/core';
import { Heroe } from 'src/app/entidades/heroe';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  listaHeroes : Heroe[] = []
  heroe : Heroe | null = null//permitimos al heroe apuntar null mediante el tipo unión "|"

  
  insertarDeshabilitado = false//boton insertar habilitado por defecto
  modificarBorrarDeshabilitado = true//botones de modificar y borrar deshabilitados por defecto

  

  nombreObligatorioOculto = true
  universoObligatorioOculto = true


  id : number = 0
  nombre : string = ""
  universo : string = ""

  constructor() { 
    let heroe : Heroe = new Heroe("Capitan America", "MARVEL")
    this.listaHeroes.push(heroe);
    heroe = new Heroe("Superman", "DC")
    this.listaHeroes.push(heroe)
  }


  public insertar(){
    if(!this.hayErroresEnFormulario()){
      this.heroe = new Heroe(this.nombre, this.universo)
      console.log(`Insertando Heroe: ${this.heroe.toString()}`)
      this.listaHeroes.push(this.heroe)
      this.vaciar()
      console.log("Heroe insertado!")
    }    
  }


  public hayErroresEnFormulario() : boolean{
  
    let error : boolean = false
    this.ocultarMensajesError()

    if(this.nombre.trim().length==0){
      this.nombreObligatorioOculto = false//mostramos el mensaje de nombre obligatorio
      error = true
    }
    
    if(this.universo.trim().length==0){
      this.universoObligatorioOculto = false//mostramos el mensaje de universo obligatorio
      error = true
    }
    return error
  }


  public modificar(){    
    if(!this.hayErroresEnFormulario()){
      for(let a=0; a<this.listaHeroes.length; a++){
        let heroeAux : Heroe = this.listaHeroes[a]
        if(heroeAux.id == this.id){
          this.listaHeroes[a].nombre = this.nombre
          this.listaHeroes[a].universo = this.universo
          break
        }
      }
     
      console.log("Modificando... " + this.heroe?.toString())
      this.vaciar()
    }
  }


  public borrar(){    
    for(let a=0; a<this.listaHeroes.length; a++){
      if( this.listaHeroes[a].id == this.id){
        this.listaHeroes.splice(a,1)//Eliminamos desde 'a' 1 elemento
        break;
      }
    }
    this.vaciar()
    console.log("Borrando... " + this.id)
  }


  public vaciar(){
    console.log("Vaciando...")  
    //Reseteamos el formulario   
    this.id = 0
    this.nombre = ""
    this.universo = ""

    this.insertarDeshabilitado = false//Habilitamos insertar
    this.modificarBorrarDeshabilitado = true//Deshabilitamos modificar/borrar

    this.ocultarMensajesError()
  }
  

  public seleccionar(heroe : Heroe) : void{
    console.log("Seleccionando...")
    this.ocultarMensajesError()

    this.id = heroe.id
    this.nombre = heroe.nombre
    this.universo = heroe.universo

    this.insertarDeshabilitado = true//Deshabilitamos insertar
    this.modificarBorrarDeshabilitado = false//Habilitamos modificar/borrar
  }


  public ocultarMensajesError(){
    this.nombreObligatorioOculto = true
    this.universoObligatorioOculto = true
  } 

  ngOnInit() {

  }

}
