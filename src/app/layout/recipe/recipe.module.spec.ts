import { RecipeModule } from './recipe.module';

describe('RecipeModule', () => {
    let formModule: RecipeModule;

    beforeEach(() => {
        formModule = new RecipeModule();
    });

    it('should create an instance', () => {
        expect(formModule).toBeTruthy();
    });
});
