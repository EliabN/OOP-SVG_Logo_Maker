# OOP: SVG Logo Maker
The application prompts the user to select a color and shape, provide text for the logo, and save the `generated` SVG to a `.svg` file.
## Description

Application that takes in user input to generate a logo and save it as an [SVG file](https://en.wikipedia.org/wiki/Scalable_Vector_Graphics) with a Node.js command-line(inquirer). 


Because this application won’t be deployed, you’ll find a link to a walkthrough video below that demonstrates its functionality and passes all of the tests.

### User Story

```md
AS a freelance web developer
I WANT to generate a simple logo for my projects
SO THAT I don't have to pay a graphic designer
```

## Preview

The following image shows a mock-up of the generated SVG given the following input entered by the user: `SVG` for the text, `white` for the text color, `circle` from the list of shapes, and `green` for the shape color. Note that this is just an image of the output SVG and not the SVG file itself:

![Image showing a green circle with white text that reads "SVG.".](./Images/10-oop-homework-demo.png)

## Additional Information

The application will use [Jest](https://www.npmjs.com/package/jest) for running the unit tests and [Inquirer](https://www.npmjs.com/package/inquirer/v/8.2.4) for collecting input from the user. The application will be invoked by using the following command:

```bash
use > npm start < for => node index.js
```

For repository file structure refer to example diagram below:

```md
.  
├── examples/           // Example svg file(s) created with the app
├── lib/                // Folder for classes or functions
    ├── shapes.js       // Exports `Triangle`, `Circle`, and `Square` classes
    ├── shapes.test.js  // Jest tests for shapes
    └── more...         // Additional files and tests
├── .gitignore          // Indicates which folders and files Git should ignore
├── index.js            // Runs the application using imports from lib/
├── package.json
└── README.md           // App description, link to video, setup and usage instructions           
```

## Test

The example test below:

```js
const shape = new Shape();
    const err = new Error('Child class must implement a render() method.');
    expect(() => shape.render()).toThrow(err);
```
## Demonstration

Because this application won’t be deployed, here is a walkthrough video that demonstrates its functionality.

Click the link for the [Demonstration video](https://watch.screencastify.com/v/6Osc8IEalBuwHxgAQXYP)

## License

This project license is under the [MIT](https://opensource.org/licenses/MIT)

---
## Resources USED

* [Example SVG](https://static.fullstack-bootcamp.com/fullstack-ground/module-10/circle.svg)

* [Scalable Vector Graphics (SVG)](https://en.wikipedia.org/wiki/Scalable_Vector_Graphics)

* [SVG tutorial](https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial)

* [Basic SVG shapes](https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Basic_Shapes)

* [Text in SVG](https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Texts)

* [SVG VS Code extension](https://marketplace.visualstudio.com/items?itemName=jock.svg)
