import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import {MeasureService} from '../../services/measure.service';
import {Measure} from '../../models/measure';

@Component({
    selector: 'app-measure',
    templateUrl: './measure.component.html',
    styleUrls: ['./measure.component.scss'],
    animations: [routerTransition()]
})
export class MeasureComponent implements OnInit {
    description: string;
    number: string;
    measure: Measure;
    measures: Measure[];
    constructor(public measureService: MeasureService) {
        this.measure = {'id': '', 'description': '', 'number': ''};
        this.measureService.getMeasures().subscribe((measures) => {
            this.measures = measures.data;
            console.log(this.measures);
        });
    }

    ngOnInit() {}

    addMeasure(){
    }
}
