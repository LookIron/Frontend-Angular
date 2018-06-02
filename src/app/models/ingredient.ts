export class Ingredient{
    id: number;
    nombre:string;
    descripcion:string;
    unidadMedida: string;

    constructor(id:number, nombre: string, descripcion: string, unidadMedida: string){
        this.id = id;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.unidadMedida = unidadMedida;
    }

}
