# CYO-Logo
This application uses Node.js to build a custom SVG logo based on user input.

## Description

Every developer needs a logo to uniquely present and mark their work.  Hiring a professional artist to create a custom logo can be expensive.  That's where this application fills a need.  Developers can generate a custom SVG logo in one of three shapes: a square, triangle, or circle.  Up to three letters can be included in the logo's text, and custom colors can be used for the background and text.  Running the index.js file will prompt the developer for the information needed to generate the logo and use the input to generate the custom SVG file.

![CYO Logo Application](./CYO_Logo_Generator_Demo.gif)

## Table of Contents 

- [Installation](#installation)  
- [Usage](#usage)  
- [License](#license)  
- [Tests](#tests)
- [Questions](#questions)  
      
    
## Installation

The CYO Logo application can be installed by cloning the repository to your local machine.  Please note, Node.js is required in order to run this application and will need to be installed before attempting to run the program.  The package dependencies, inquirer, are included within the package.json file and can be installed through a simple npm i command once the repository has been successfully cloned on the local computer.  The Inquirer module is required for this application to work correctly and must be installed prior to running the program.  NPM will also install the jest package used to test the application.  

## Usage

The application is initialized by running the node index.js command through the terminal.  When the index.js file is called it runs the inquirer prompts to retrieve input from the developer about their logo.  Inquirer will prompt for three different pieces of information: logo text, text color, logo shape, and the logo's background color.  The text input will accept text up to three characters.  The colors for both the text and background will accept input of either names or hexademial values.  The shapes prompt will present the developer with a list of options.  The options are generated from an array and can be navigated using the up and down arrow keys.  Pressing Enter will accept the selection.  If at any time a mistake is made or a value is entered incorrectly, the developer can exit the prompts and stop the logo's creation using ctrl + C.  Once all prompts have been answered the custom logo SVG file is generated.  It will be labeled with the name "logo_shape.svg".

A link to the video demonstrating the application's use can be found here: [Walkthrough Video](https://drive.google.com/file/d/1marQcYpmfynJUbG59e_q3WAczKe5DOaF/view)

## License

This application is covered under the license linked below.  For further information regarding the license and its terms, please consult the official licensing documentation using the provided link.

[License: MIT](https://opensource.org/licenses/MIT)

## Contributions

Credit goes to Bobbi Tarkany for updating the modules to export as objects to debug the render function tests.

## Tests

This application was tested using the jest module.  Tests were developed for each class within the shapes.js file.  The file used to test the application's functionality is shapes.test.js.  Each class was tested to ensure it was properly creating an instance of the parent class.  The render function of each of class was also tested to verify its output was properly generating the syntax required to generate the SVG logo and the shape selected.

## Questions

If you have any questions, please contact me using the information provided below:  
  
GitHub: chilejay7  
Email: codyburk7@gmail.com
