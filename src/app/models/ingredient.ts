export class Ingredient{
    id: string;
    name: string;
    description: string;
    measure_id: string;

    constructor(id: string, name: string, description: string, measure_id: string){
        this.id = id;
        this.name = name;
        this.description = description;
        this.measure_id = measure_id;
    }

}
