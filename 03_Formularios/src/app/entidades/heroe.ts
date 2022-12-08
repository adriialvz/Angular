
export class Heroe{

 
    private _id : number = 0;

    
    private static contadorId : number = 1;

  
    constructor(public nombre : string, public universo : string){
        this._id = Heroe.contadorId++;
        this.nombre = nombre
        this.universo = universo
    }

    public get id() : number{
        return this._id;
    }

    public toString() : string {
        return `ID: ${this._id}, Nombre: ${this.nombre}, Universo: ${this.universo}`
    }

}