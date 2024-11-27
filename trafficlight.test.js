const app = require("./trafficlight");


describe('Test: No Color Argument', () => {
    it('should return "OUT OF ORDER" when no color is provided', () => {
        expect(app.trafficLight()).toBe('OUT OF ORDER');
    });
});


describe('test suite traffic light', () => {
    it(`case red light`, () => {
        expect(app.trafficLight("red")).toBe("DON'T WALK!");
    });
});


describe('Test: Orange Light', () => {
    it('should return "ATTENTION!" when the color is orange', () => {
        expect(app.trafficLight("orange")).toBe("ATTENTION!");
    });
});


describe('Test: Green Light', () => {
    it('should return "WALK!" when the color is green', () => {
        expect(app.trafficLight("green")).toBe("WALK!");
    });
});

