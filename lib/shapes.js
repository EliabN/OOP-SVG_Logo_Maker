// Import all class of shapes
const Shape = require('./shapeClass');


// Circle class with Shape properties 
class Circle extends Shape {
    constructor(logoAnswers) {
        super(logoAnswers);
    }
    // Render class override and with Circle syntax
    render() {
        //console.log(logoAnswers.text)
        return `<circle cx="100" cy="100" r="75" stroke="black" stroke-width="4" fill="${this.shapeColor}" />
        \n\t<text x="150" y="120" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>`;
    }
}

// Square class with Shape class properties 
class Square extends Shape {
    constructor(logoAnswers) {
        super(logoAnswers);
    }
    // Render class override and with Square syntax
    render() {
        //console.log(logoAnswers.text)
        return `<rect x="50" y="20" width="130" height="130" stroke-width="4" fill="${this.shapeColor}" stroke="black" />
        \n\t<text x="115" y="105" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>`;
    }
}

// Triangle class with Shape class properties 
class Triangle extends Shape {
    constructor(logoAnswers) {
        super(logoAnswers);
    }
    // Render class override and with Triangle syntax
    render() {
        //console.log(logoAnswers.text)
        return `<polygon points="120,200 20,10 220,10" stroke-width="4" fill="${this.shapeColor}" stroke="black" />
        \n\t<text x="120" y="70" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>`;
    }
}

// Rectangle class with Shape class properties 
class Rectangle extends Shape {
    constructor(logoAnswers) {
        super(logoAnswers);
    }
    // Render class override and with Rectangle syntax
    render() {
        //console.log(logoAnswers.text)
        return `<rect x="20" y="20" width="220" height="120" stroke-width="4" fill="${this.shapeColor}" stroke="black" />
        \n\t<text  x="130" y="100" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>`;
    }
}

module.exports = { Circle, Square, Rectangle, Triangle };