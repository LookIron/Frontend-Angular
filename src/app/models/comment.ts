export class Comment{
    description: string;
    user_id: string;
    recipe_id: string;

    constructor(description: string, user_id: string, recipe_id: string){
        this.description = description;
        this.user_id = user_id;
        this.recipe_id = recipe_id;
    }

}
