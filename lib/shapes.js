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
                    createLogo(this.logo),
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

function createLogo(logo = []) {
    const header = new Header().render(logo[0].text);

    console.log(logo[0].text)
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

    <circle cx="150" cy="100" r="80" fill="green" />
  
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">${logo[0].text}</text>
  
    </svg>`;
}

module.exports = CLI;
