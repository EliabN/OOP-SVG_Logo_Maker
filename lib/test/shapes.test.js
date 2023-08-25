// Import all class of shapes
const { Circle, Square, Triangle, Rectangle } = require('../shapes');

// Circle testing
describe('Circle', () => {
  test('should render correct SVG string', () => {
    // Circle instance
    const circle = new Circle({
      text: "YYY",
      textColor: "red",
      shape: "Circle",
      shapeColor: "#733909"
    });

    // Rendered svg syntax
    const renderedSVG = circle.render();

    // Expected svg syntax
    const expectedSVG =
      `<circle cx="100" cy="100" r="75" stroke="black" stroke-width="4" fill="#733909" />
        
	<text x="100" y="120" font-size="60" text-anchor="middle" fill="red">YYY</text>`;

    // Testing
    expect(renderedSVG).toEqual(expectedSVG);
  });
});


// Square testing
describe('Square', () => {
  test('should render correct SVG string', () => {
    // Square instance
    const square = new Square({
      text: "YYY",
      textColor: "red",
      shape: "Square",
      shapeColor: "#733909"
    });

    // Rendered svg syntax
    const renderedSVG = square.render();

    // Expected svg syntax
    const expectedSVG =
      `<rect x="50" y="20" width="130" height="130" stroke-width="4" fill="#733909" stroke="black" />
        
	<text x="115" y="105" font-size="60" text-anchor="middle" fill="red">YYY</text>`;

    // Testing
    expect(renderedSVG).toEqual(expectedSVG);
  });
});


// Triangle testing
describe('Triangle', () => {
  test('should render correct SVG string', () => {
    // Triangle instance
    const triangle = new Triangle({
      text: "YYY",
      textColor: "red",
      shape: "Triangle",
      shapeColor: "#733909"
    });

    // Rendered svg syntax
    const renderedSVG = triangle.render();

    // Expected svg syntax
    const expectedSVG =
      `<polygon points="120,200 20,10 220,10" stroke-width="4" fill="#733909" stroke="black" />
        
	<text x="120" y="70" font-size="60" text-anchor="middle" fill="red">YYY</text>`;

    // Testing
    expect(renderedSVG).toEqual(expectedSVG);
  });
});


// Rectangle testing
describe('Rectangle', () => {
  test('should render correct SVG string', () => {
    // Rectangle instance
    const rectangle = new Rectangle({
      text: "YYY",
      textColor: "red",
      shape: "Rectangle",
      shapeColor: "#733909"
    });

    // Rendered svg syntax
    const renderedSVG = rectangle.render();

    // Expected svg syntax
    const expectedSVG =
      `<rect x="20" y="20" width="220" height="120" stroke-width="4" fill="#733909" stroke="black" />
        
	<text  x="130" y="100" font-size="60" text-anchor="middle" fill="red">YYY</text>`;

    // Testing
    expect(renderedSVG).toEqual(expectedSVG);
  });
});


