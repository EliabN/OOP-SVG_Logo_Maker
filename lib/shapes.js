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

    start() {
        return inquirer
            .prompt([
                {
                    type: 'input',
                    name: 'text',
                    message: 'Enter text;',
                },
            ])
            .then(({ text }) => {
                this.logo.push({ text });

            })
            .then(() => {
                return writeFile(
                    join(__dirname, '..', 'examples', 'square.svg'),
                    createDocument(this.logo),
                    console.log(this.logo)
                );
            })
            .then(() => console.log('Created tasks.html'))
            .catch((err) => {
                  console.log(err);
                  console.log('Oops. Something went wrong.');
            });
    }
}


module.exports = CLI;
