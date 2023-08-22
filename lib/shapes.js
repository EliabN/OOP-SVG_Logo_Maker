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
    constructor () {
        this.logo = [];
    //     this.text = '';
    //     this.textColor = '';
    //     this.shape = '';
    //     this.shapeColor = '';
    };

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
            .then(({ text, shape, shapeColor }) => {
                this.logo.push({ text, shape, shapeColor });
            })

            // Write file dir folder examples and name logo.svg
            .then(() => {
                return writeFile(
                    join(__dirname, '..', 'examples', 'logo.svg'),
                    createLogo(this.logo),
                    console.log(this.logo)
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


// Element class to 
class Element {
    constructor(children = []) {
      this.children = children;
    }
    render() {
      throw new Error('Child class must implement a render() method.');
    }
    renderInnerHtml() {
      // Loop over children and convert any children that aren't strings to an
      // html string by calling its render method.
      return this.children
        .map((child) => {
          if (typeof child === 'string') {
            return child;
          }
          return child.render();
        })
        .join('');
    }
}


class Text extends Element {
    render(text) {
        console.log(text)
        return `<text x="150" y="120" font-size="60" text-anchor="middle" fill="white">${text}</text>`;
    }
}


function createLogo(logo = []) {
    const text = new Text().render(logo[0].text);

    // Create function that returns innerHTML of shape
    function renderShape(shape) {
        //Define shape mapping
        const shapes = {
            'Circle': `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
            \n\t<circle cx="150" cy="100" r="80" stroke="black" stroke-width="4" fill="${logo[0].shapeColor}" />
            \n\t${text}
            \n</svg>`,

            'Square': `<svg version="1.1" width="400" height="180" xmlns="http://www.w3.org/2000/svg">

            <square x="50" y="20" width="150" height="150" stroke-width="4" fill="green" stroke="black" />
          
            <text x="125" y="115" font-size="60" text-anchor="middle" fill="white">${logo[0].text}</text>
            
        </svg>`,
        };

        // Check if the license type exists in the mapping
        if (shapes.hasOwnProperty(shape)) {
            // Return innerHTML of shape
            console.log(shapes[shape])
            return shapes[shape];
        }
    }

    console.log(logo[0].shape)
    return renderShape(logo[0].shape)
}

module.exports = CLI;
