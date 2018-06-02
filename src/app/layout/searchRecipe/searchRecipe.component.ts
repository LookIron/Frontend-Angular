import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';

@Component({
    selector: 'app-searchrecipes',
    templateUrl: './searchRecipe.component.html',
    styleUrls: ['./searchRecipe.component.scss'],
    animations: [routerTransition()]
})
export class SearchRecipeComponent implements OnInit {
    constructor() {}

    ngOnInit() {}
}
