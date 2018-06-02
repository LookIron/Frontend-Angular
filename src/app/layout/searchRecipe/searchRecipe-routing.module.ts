import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchRecipeComponent } from './searchRecipe.component';

const routes: Routes = [
    {
        path: '', component: SearchRecipeComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SearchRecipeRoutingModule {
}
