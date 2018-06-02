export class Recipe{
    id: string;
    name: string;
    description: string;
    steps: string;

    constructor(id: string, name: string, description: string, steps: string){
        this.id = id;
        this.name = name;
        this.description = description;
        this.steps = steps;
    }

}
