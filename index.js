const fs = require('fs');
const inquirer = require('inquirer');
const colors = require('colors');
const readmeGen = require('./utils/generateMarkdown.js')

// TODO: Create an array of questions for user input
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

const licenses = [
    'MIT',
    'BSD 3-Clause',
    'GNU GPL v3',
    'No license'
]

// writing data to README.md ... parameter: data: a string containing all content from generateMarkdown.js
function writeToFile(data) {
    fs.writeFile('./md/README.md', readmeGen.generateMarkdown(data), (err) =>
    err ? console.log(err) : console.log(color.neonGreen('\nFind the generated README in md folder')))
}

// TODO: Create a function to initialize app
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
            type: 'input',
            message: colors.bgBrightYellow(questions[6]),
            name: 'license'
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
    .then(data => {
        generateMarkdown(data)
    })
}

// Function call to initialize app
getUserInfo();

module.exports = {
    getUserInfo
}
