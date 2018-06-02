import {Injectable} from '@angular/core';
import {Recipe} from '../models/recipe';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class RecipeService {

    constructor(private http: Http) {
    }

    getRecipes(): Observable<any> {
        return this.http
            .get('http://lookiron-recipes.herokuapp.com/api/recipes')
            .map((response: Response ) => response.json());
    }

    addRecipes(name: string, description: string, steps: string) {
        return this.http.post('http://lookiron-recipes.herokuapp.com/api/recipes',
            {name: name, description: description, steps: steps},
            {headers: new Headers({'Accept': 'application/json'})})
            .map(response => response.json());
    }


}
