class Shape {
    constructor (text, color, background) {
        this.text = text;
        this.color = color;
        this.background = background;
    }
}

class Triangle extends Shape {
    constructor (text, color, background) {
    super (text, color, background)
    };

    render () {
        console.log('triangle');
    }
}

class Square extends Shape {
    constructor (text, color, background) {
    super (text, color, background)
    };

    render () {
        console.log('square');
    }
}

class Circle extends Shape {
    constructor (text, color, background){
    super (text, color, background) 
    };

    render () {
        console.log('circle');

        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

        <circle cx="150" cy="100" r="80" fill="${background}" />

        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${color}">${text}</text>

        </svg>`
    }
}

createSVG = ({ text, shape, color, background }) => {
    if (shape === 'circle') {
        const circle = new Circle();
        circle.render();
    }
}

module.exports = createSVG;