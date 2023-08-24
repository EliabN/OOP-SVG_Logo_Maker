// Import all class of shapes
const Shape = require('../shapeClass.js');

describe('Shape', () => {
  test('should throw error if render() is called', () => {
    const shape = new Shape({
      text: 'YYY',
      textColor: 'red',
      shape: 'Circle',
      shapeColor: '#733909'
    });
    const err = new Error('Child class must implement a render() method.');
    expect(() => shape.render()).toThrow(err);
  });
});

