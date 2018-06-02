import {Injectable} from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class MeasureService {

    constructor(private http: Http) {
    }
    getMeasures(): Observable<any> {
        return this.http
            .get('http://lookiron-recipes.herokuapp.com/api/measures ')
            .map((response: Response ) => response.json());
    }
    addMeasure(description: string, number: string) {
        return this.http.post('http://lookiron-recipes.herokuapp.com/api/measures  ',
            {description: description, number: number},
            {headers: new Headers({'Accept': 'application/json'})})
            .map(response => response.json());
    }
}
