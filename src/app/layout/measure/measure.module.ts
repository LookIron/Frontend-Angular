import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MeasureRoutingModule } from './measure-routing.module';
import { MeasureComponent } from './measure.component';
import { PageHeaderModule } from './../../shared';

@NgModule({
    imports: [CommonModule, MeasureRoutingModule, PageHeaderModule, FormsModule],
    declarations: [MeasureComponent]
})
export class MeasureModule {}
