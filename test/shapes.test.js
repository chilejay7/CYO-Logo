const indexScript = require('../index.js');
const Shape = require('../lib/shapes.js');
const Triangle = require('../lib/shapes.js');
const Circle = require('../lib/shapes.js');
const Square = require('../lib/shapes.js');

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
           const triangle = new Triangle('lvr', 'red', 'blue');
            
           expect(triangle.text).toEqual('lvr');
        })
    });

    describe('Return color argument', () => {
        it('should return the color argument passed to it as a property when called', () => {
           const triangle = new Triangle('lvr', 'red', 'blue');
            
           expect(triangle.color).toEqual('red');
        })
    });
    
    describe('Return background argument', () => {
        it('should return the background argument passed to it as a property when called', () => {
           const triangle = new Triangle('lvr', 'red', 'blue');
            
           expect(triangle.background).toEqual('blue');
        })
    });

    describe('render fucntion', () => {
        it('should render the svg logo when the render method is called', () => {
            const triangle = new Triangle('lvr', 'red', 'blue');
            const returnValue = triangle.render();
            expect(returnValue).toBe(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

            <polygon points="150, 18 244, 182 56, 182" fill="blue" />

            <text x="150" y="150" font-size="60" text-anchor="middle" fill="red">lvr</text>

        </svg>`)
        })
    })
});

describe('Circle', () => {
    describe('Create new intance of Circle class', () => {
        it('should create a new instance of the circle class', () => {
            const circle = new Circle();
            expect(circle).toBeInstanceOf(Circle);
        })
    });
});

describe('Square', () => {
    describe('Create new instance', () => {
        it('should create a new instance of Square', () => {
            const square = new Square();
            expect(square).toBeInstanceOf(Square);
        })
    });
});