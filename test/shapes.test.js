const indexScript = require('../index.js');
const Shape = require('../lib/shapes.js');

describe('Shape', () => {
    describe('Create new instance', () => {
        it('should create a new instance of the Shape class', () => {
            const newShape = new Shape();
            expect(newShape).toBeInstanceOf(Shape);
        })
    });

    
})