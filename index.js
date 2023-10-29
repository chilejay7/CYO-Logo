const inquirer = require('inquirer');
const fs = require('fs');
const {createSVG} = require('./lib/shapes.js');

const shapesArray = ['Circle', 'Triangle', 'Square'];

const questions = [
    {   
        type: 'input',
        message: `Please enter up to three characters for your logo's text.`,
        name: 'text',

        validate: function(name) {
            while(name.length > 3) {
                return `The name you entered was longer than three characters.  Please enter up to three characters for your logo's text.`
            }
            return true;
        }
    },
    {
        type: 'input',
        message: `Please enter the name or hex # of the color you would like to use for the logo's text.`,
        name: 'color',
    },
    {
        type: 'list',
        message: 'Please choose a shape for your logo.',
        choices: shapesArray,
        name: 'shape',
    },
    {
        type: 'input',
        message: `Please enter the name or hex # of the color you would like to use for the logo's background color.`,
        name: 'background'
    },
];

writeToFile = (fileName, data) => {
    fs.writeFile(fileName, data, err => {
        console.log(err);
    });
}

init = async () => {
    const answers = await inquirer.prompt(questions);

    console.log(answers);

    const { shape } = answers

    writeToFile(`./examples/logo_${shape.toLowerCase()}.svg`, createSVG(answers));
}

init();