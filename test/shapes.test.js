const indexScript = require('../index.js');
const Shape = require('../lib/shapes.js');
const Triangle = require('../lib/shapes.js')

describe('Shape', () => {
    describe('Create new instance', () => {
        it('should create a new instance of the Shape class', () => {
            const newShape = new Shape();
            expect(newShape).toBeInstanceOf(Shape);
        })
    });
});

describe('Triangle', () => {
    describe('Create new instance', () => {
        it('should create a new instance of the Triangle class', () => {
            const triangle = new Triangle();
            expect(triangle).toBeInstanceOf(Triangle);
        });
    })

    describe('Return text argument', () => {
        it('should return the text argument passed to it as a property when called', () => {
           const triangle = new Triangle('lvr');
            
           expect(triangle.text).toEqual('lvr');
        })
    })
})