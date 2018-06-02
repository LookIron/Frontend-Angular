import {Injectable} from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class IngredientService {

    constructor(private http: Http) {
    }

    getIngredients(): Observable<any> {
        return this.http
            .get('http://lookiron-recipes.herokuapp.com/api/ingredients')
            .map((response: Response ) => response.json());
    }

    addIngredient(name: string, description: string, measure_id: string) {
        return this.http.post('http://lookiron-recipes.herokuapp.com/api/ingredients ',
            {name: name, description: description, measure_id: measure_id},
            {headers: new Headers({'Accept': 'application/json'})})
            .map(response => response.json());
    }


}
