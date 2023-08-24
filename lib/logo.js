// Import all class of shapes
const { Circle, Square, Rectangle, Triangle } = require('./shapes');

// Function to create .svg file according to input
function createLogo(logoAnswers) {
    const circleSVG = new Circle(logoAnswers);
    const squareSVG = new Square(logoAnswers);
    const rectangleSVG =new Rectangle(logoAnswers);
    const triangleSVG =new Triangle(logoAnswers);

    let shape = logoAnswers.shape;

    // Create function that returns innerHTML of shape
    function renderShape(shape) {
        // Define shape mapping
        const shapes = {
            'Circle': circleSVG.render(),
            'Square': squareSVG.render(),
            'Triangle': triangleSVG.render(),
            'Rectangle': rectangleSVG.render(),
        };

        // Check if the shape type exists in the mapping
        if (shapes.hasOwnProperty(shape)) {
            // Return innerHTML of shape
            console.log(shapes[shape]);
            return `<svg version="1.1" width="300" height="210" xmlns="http://www.w3.org/2000/svg">
            \n\t${shapes[shape]}
            \n</svg>`;
        }
    }

    return renderShape(shape)
}

module.exports = { createLogo }