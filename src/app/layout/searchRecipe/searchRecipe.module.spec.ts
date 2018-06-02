import { SearchRecipeModule } from './searchRecipe.module';

describe('SearchRecipeModule', () => {
    let formModule: SearchRecipeModule;

    beforeEach(() => {
        formModule = new SearchRecipeModule();
    });

    it('should create an instance', () => {
        expect(formModule).toBeTruthy();
    });
});
