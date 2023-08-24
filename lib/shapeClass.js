// Shape class with general shape properties
class Shape {
    // Properties
    constructor (logoAnswers) {;
        this.text = logoAnswers.text;
        this.textColor = logoAnswers.textColor;
        this.shapeColor = logoAnswers.shapeColor;
    };
    // Render function of shapes
    render() {
      throw new Error('Child class must implement a render() method.');
    }
}

module.exports = Shape;
