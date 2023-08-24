// Import inquirer
const inquirer = require('inquirer');
// Import join function
const { join } = require('path');
// Import writeFile function
const { writeFile } = require('fs/promises');
// Import createLogo function
//const { createLogo } = require('.logo');

// Command-line interface 
class CLI {
    // Start of program
    start() {
        // Run inquirer
        return inquirer
            // Prompt user with questions 
            .prompt([
                {
                    type: 'input',
                    name: 'text',
                    message: 'Enter text (must be upto 3 letters);',
                    validate: (value) => { if((value.length >= 1)&&(value.length <= 3)) {return true} else {return 'Enter only upto 3 letter:'}},
                },
                {
                    type: 'input',
                    name: 'textColor',
                    message: 'Enter your text color choice;',
                },
                {
                    type: 'list',   
                    name: 'shape',
                    message:'What shape would you like?',
                    choices: ['Circle', 'Triangle', 'Square', 'Rectangle'],
                },
                {
                    type: 'input',
                    name: 'shapeColor',
                    message: 'Enter your shape color choice',
                },
            ])
            // Return answer of questions and store in logo[] array
            // Write file dir folder examples and name logo.svg
            .then((logoAnswers) => {
                return writeFile(
                    join(__dirname, '..', 'examples', 'logo.svg'),
                    createLogo(logoAnswers),
                    console.log("50",logoAnswers)
                );
            })

            // Return feedback and error
            .then(() => console.log('Created logo.svg in examples file'))
            .catch((err) => {
                  console.log(err);
                  console.log('Oops. Something went wrong.');
            });
    }
}



// Shape class to 
class Shape {
    constructor (logoAnswers) {;
        this.text = logoAnswers.text;
        this.textColor = logoAnswers.textColor;
        this.shapeColor = logoAnswers.shapeColor;
    };
    renderTest() {
      throw new Error('Child class must implement a render() method.');
    }
}


class Circle extends Shape {
    constructor(logoAnswers) {
        super(logoAnswers);
    }
    render() {
        //console.log(logoAnswers.text)
        return `<circle cx="150" cy="100" r="80" stroke="black" stroke-width="4" fill="${this.shapeColor}"/>
        \n\t<text x="150" y="120" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>`;
    }
}



function createLogo(logoAnswers) {
    console.log("90",logoAnswers)

    const circleSVG = new Circle(logoAnswers);

    let shape = logoAnswers.shape;
    
    // Create function that returns innerHTML of shape
    function renderShape(shape) {
        // Define shape mapping
        const shapes = {
            'Circle': circleSVG.render(),

            'Square': `<svg version="1.1" width="400" height="180" xmlns="http://www.w3.org/2000/svg">

            <square x="50" y="20" width="150" height="150" stroke-width="4" fill="green" stroke="black" />
          
            <text x="125" y="115" font-size="60" text-anchor="middle" fill="white">${logoAnswers.text}</text>
            
        </svg>`,
        };

        // Check if the shape type exists in the mapping
        if (shapes.hasOwnProperty(shape)) {
            // Return innerHTML of shape
            console.log(shapes[shape])
            return `<svg version="1.1" width="500" height="210" xmlns="http://www.w3.org/2000/svg">
            \n\t${shapes[shape]}
            \n</svg>`;
        }
    }

    return renderShape(shape)
}

module.exports = CLI;
