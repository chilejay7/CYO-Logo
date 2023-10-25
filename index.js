const inquirer = require('inquirer');
const fs = require('fs');
const createLogo = require('./lib/shapes.js');

const shapes = ['circle', 'triangle', 'square'];

const questions = [
    {
        type: 'input',
        message: `Please enter up to three characters for your logo's text.`,
        name: 'text',
    },
    {
        type: 'input',
        message: `Please enter the name or hex # of the color you would like to use for the logo's text.`,
        name: 'color',
    },
    {
        type: 'list',
        message: 'Please choose a shape for your logo.',
        choices: shapes,
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

    writeToFile('./examples/logo.svg', createSVG(answers));
}

init();