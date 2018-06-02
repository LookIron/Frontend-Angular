export class Recipe{
    id: string;
    name: string;
    description: string;
    preparation: string;

    constructor(id: string, name: string, description: string, preparation: string){
        this.id = id;
        this.name = name;
        this.description = description;
        this.preparation = preparation;
    }

}
