class Shape {
    constructor(text, color, background) {
        this.text = text;
        this.color = color;
        this.background = background;
    }
}

class Triangle extends Shape {
    constructor(text, color, background) {
        super(text, color, background)
    };

    render() {
        console.log('Sketching a triangle');
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

                    <polygon points="150, 18 244, 182 56, 182" fill="${this.background}" />

                    <text x="150" y="150" font-size="60" text-anchor="middle" fill="${this.color}">${this.text}</text>

                </svg>`
    }
}

class Square extends Shape {
    constructor(text, color, background) {
        super(text, color, background)
    };

    render() {
        console.log('I made a square');
        return `<svg version="1.1" xmlns="http://www.w3.org/2000/svg">

                    <rect x="150" y="100" rx="10" ry="10" width="300" height="200" fill="${this.background}" />
                
                    <text x="300" y="200" font-size="60" text-anchor="middle" fill="${this.color}">${this.text}</text>
                
                </svg>`
    }
}

class Circle extends Shape {
    constructor(text, color, background) {
        super(text, color, background)
    };

    render() {
        console.log('Drawing a circle');

        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

                    <circle cx="150" cy="100" r="80" fill="${this.background}" />

                    <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.color}">${this.text}</text>

                </svg>`
    }
}

createSVG = ({ text, shape, color, background }) => {
    if (shape === 'circle') {
        const svgShape = new Circle(text, color, background);
        return svgShape.render();
    } else if (shape === 'square') {
        const svgShape = new Square(text, color, background);
        return svgShape.render();
    } else {
        const svgShape = new Triangle(text, color, background);
        return svgShape.render();
    }

    // const svgShape = new shape(text, color, background)
    // return svgShape.render();
}

// generateArray = () => {
//     return shapesArray = [Circle, Triangle, Square];
// }

// module.exports = generateArray;

module.exports = createSVG;