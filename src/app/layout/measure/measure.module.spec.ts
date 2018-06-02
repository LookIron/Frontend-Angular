import { MeasureModule } from './measure.module';

describe('MeasureModule', () => {
    let formModule: MeasureModule;

    beforeEach(() => {
        formModule = new MeasureModule();
    });

    it('should create an instance', () => {
        expect(formModule).toBeTruthy();
    });
});
