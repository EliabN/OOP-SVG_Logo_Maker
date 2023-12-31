// Import inquirer
const inquirer = require('inquirer');
// Import join function
const { join } = require('path');
// Import writeFile function
const { writeFile } = require('fs/promises');
// Import createLogo function
const { createLogo } = require('./logo');

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
                    validate: (value) => { if(value != "") {return true} else {return 'Please enter color:'}},
                },
                {
                    type: 'list',   
                    name: 'shape',
                    message:'What shape would you like?',
                    choices: ['Circle','Square','Triangle','Rectangle'],
                },
                {
                    type: 'input',
                    name: 'shapeColor',
                    message: 'Enter your shape color choice',
                    validate: (value) => { if(value != "") {return true} else {return 'Please enter color:'}},
                },
            ])
            // Return answer of questions and store in logo[] array
            // Write file dir folder examples and name logoLogo.svg
            .then((logoAnswers) => {
                return writeFile(
                    join(__dirname, '..', '', 'sampleLogo.svg'),
                    createLogo(logoAnswers),
                    console.log("50",logoAnswers)
                );
            })

            // Return feedback and error
            .then(() => console.log('Created sampleLogo.svg at the bottom in files'))
            .catch((err) => {
                  console.log(err);
                  console.log('Oops. Something went wrong.');
            });
    }
}

// Export CLI class
module.exports = CLI;