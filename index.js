// TODO: Include packages needed for this application
import inquirer from 'inquirer';
import fs from 'fs';

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is your project name?', 
    },
    {
        type: 'input',
        name: 'description',
        message: 'Provide a description of your project.',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What command should be run to install dependencies.',
    },
    {
        type: 'input',
        name: 'test',
        message: 'What command should be run to run tests?',
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username.',
    },
        {
        type: 'input',
        name: 'usage',
        message: 'Provide your usage information.',
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'Provide contribution guidelines.',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address.',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Select a license.',
        choices: ['MIT', 'GPL', 'Apache', 'None'],
    }
]; 


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            console.log(err);
        } else {
            console.log('File written successfully');
        }
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((data) => {
        writeToFile('README.md', generateMarkdown(data));
    });
}

// Function call to initialize app
init() 