export class User{
    nombre: string;
    id: string;
    email: string;
    password: string;

    constructor(nombre: string, id: string, email: string, password: string){
        this.nombre = nombre;
        this.id = id;
        this.email = email;
        this.password = password;
    }

}
