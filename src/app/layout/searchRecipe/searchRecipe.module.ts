import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchRecipeRoutingModule } from './searchRecipe-routing.module';
import { SearchRecipeComponent } from './searchRecipe.component';
import { PageHeaderModule } from '../../shared/index';

@NgModule({
    imports: [CommonModule, SearchRecipeRoutingModule, PageHeaderModule],
    declarations: [SearchRecipeComponent]
})
export class SearchRecipeModule {}
