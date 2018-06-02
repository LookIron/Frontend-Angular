import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { RecipeRoutingModule } from './recipe-routing.module';
import { RecipeComponent } from './recipe.component';
import { PageHeaderModule } from './../../shared';

@NgModule({
    imports: [CommonModule, RecipeRoutingModule, PageHeaderModule, FormsModule],
    declarations: [RecipeComponent]
})
export class RecipeModule {}
