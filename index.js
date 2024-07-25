const fs = require('fs');
const inquirer = require('inquirer');
const colors = require('colors');
const readmeGen = require('./utils/generateMarkdown.js')

// Questions inquirer will prompt the user to answer for README content
const questions = [
    'Please supply your GitHub username:',
    'and email address:',
    'What is the title of your project?',
    'Please briefly describe your project:',
    'Installation steps?',
    'Usage instructions?',
    'License, if any:',
    'Contributing guidelines?',
    'Tests?'
];

//define array of available license choices
const licenses = [
    'MIT',
    'BSD 3-Clause',
    'GNU GPL v3',
    'CC0',
    'Apache 2.0',
    'WTFPL',
    'No license'
]

// write data to new README.md ... data parameter is a string containing all content from generateMarkdown.js
function writeToFile(data) {
    fs.writeFileSync('./markdown/README.md', readmeGen.generateMarkdown(data));
}

// inquirer prompt questions for contents of README 
function getUserInfo() {
    inquirer.prompt([
        {
            type: 'input',
            message: colors.bgBrightYellow(questions[0]),
            name: 'username'
        },
        {
            type: 'input',
            message: colors.bgBrightYellow(questions[1]),
            name: 'email'
        },
        {
            type: 'input',
            message: colors.bgBrightYellow(questions[2]),
            name: 'title'
        },
        {
            type: 'input',
            message: colors.bgBrightYellow(questions[3]),
            name: 'description'
        },
        {
            type: 'input',
            message: colors.bgBrightYellow(questions[4]),
            name: 'installation'
        },
        {
            type: 'input',
            message: colors.bgBrightYellow(questions[5]),
            name: 'usage'
        },
        {
            type: 'list',
            message: colors.bgBrightYellow(questions[6]),
            name: 'license',
            choices: licenses
        },
        {
            type: 'input',
            message: colors.bgBrightYellow(questions[7]),
            name: 'contributing'
        },
        {
            type: 'input',
            message: colors.bgBrightYellow(questions[8]),
            name: 'tests'
        }
    ])
    .then((data) => {
        writeToFile(data);
    })
    .catch((err) => {
        console.log('Failure with:');
        console.log(err);
    })
}

// Function call to initialize app
getUserInfo();


