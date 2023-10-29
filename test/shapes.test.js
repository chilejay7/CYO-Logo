const indexScript = require('../index.js');
const Shape = require('../lib/shapes.js');
const Triangle = require('../lib/shapes.js');
const Circle = require('../lib/shapes.js');
const Square = require('../lib/shapes.js');

const testData = {
    text: "lvr",
    color: "red",
    shape: "circle",
    background: "blue",
}

const { text, color, shape, background } = testData 

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
           const triangle = new Triangle(text, color, background);
            
           expect(triangle.text).toEqual(text);
        })
    });

    describe('Return color argument', () => {
        it('should return the color argument passed to it as a property when called', () => {
           const triangle = new Triangle(text, color, background);
            
           expect(triangle.color).toEqual(color);
        })
    });
    
    describe('Return background argument', () => {
        it('should return the background argument passed to it as a property when called', () => {
           const triangle = new Triangle(text, color, background);
            
           expect(triangle.background).toEqual(background);
        })
    });
    
    describe('defines render method', () => {
        it('should recognize the render property of the Triangle class is a function', () => {
           const triangle = new Triangle(text, color, background);
            
           expect(typeof triangle.render).toBe('function');
        })
    });

    describe('Triangle render function', () => {
        it('should render the svg logo when the render method is called', () => {
            const triangle = new Triangle(text, color, background);
           
            expect(triangle.render()).toMatch(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

            <polygon points="150, 18 244, 182 56, 182" fill="${background}" />

            <text x="150" y="150" font-size="60" text-anchor="middle" fill="${color}">${text}</text>

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

    describe('text', () => {
        it('should output the text value of the destructured testData object', () => {
            const circle = new Circle(text, color, background);
            expect(circle.text).toEqual(text);
            // console.log(`Circle text: ${circle.text}`)
        })
    })
});

describe('Square', () => {
    describe('Create new instance', () => {
        it('should create a new instance of Square', () => {
            const square = new Square();
            expect(square).toBeInstanceOf(Square);
        })
    });
});