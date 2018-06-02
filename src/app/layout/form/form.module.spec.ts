import { FormModule } from './form.module';

describe('RecipeModule', () => {
    let formModule: FormModule;

    beforeEach(() => {
        formModule = new FormModule();
    });

    it('should create an instance', () => {
        expect(formModule).toBeTruthy();
    });
});
