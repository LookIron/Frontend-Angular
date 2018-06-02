import {Injectable} from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class CommentService {

    constructor(private http: Http) {
    }

    getComments(): Observable<any> {
        return this.http
            .get('http://lookiron-recipes.herokuapp.com/api/comments')
            .map((response: Response ) => response.json());
    }

    addComment(description: string, user_id: string, recipe_id: string) {
        return this.http.post('http://lookiron-recipes.herokuapp.com/api/comments ',
            {description: description, user_id: user_id, recipe_id: recipe_id},
            {headers: new Headers({'Accept': 'application/json'})})
            .map(response => response.json());
    }


}
