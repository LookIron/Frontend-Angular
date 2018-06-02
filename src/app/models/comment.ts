export class Comment{
    descripcion:string;
    idUsuario: string;
    idReceta: string;

    constructor(descripcion: string, idUsuario: string, idReceta: string){
        this.descripcion = descripcion;
        this.idUsuario = idUsuario;
        this.idReceta = idReceta;
    }

}
