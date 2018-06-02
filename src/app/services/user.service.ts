import {Injectable} from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class UserService {

    constructor(private http: Http) {
    }

    getUsers(): Observable<any> {
        return this.http
            .get('http://lookiron-recipes.herokuapp.com/api/user')
            .map((response: Response ) => response.json());
    }

    addUser(recipe_id: string, ingredient_id: string) {
        return this.http.post('http://lookiron-recipes.herokuapp.com/api/user ',
            {recipe_id: recipe_id, ingredient_id: ingredient_id},
            {headers: new Headers({'Accept': 'application/json'})})
            .map(response => response.json());
    }


}
