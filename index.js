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

/* define array of available license choices */
const licenses = [
    'MIT',
    'BSD 3-Clause',
    'GNU GPL v3',
    'CC0',
    'Apache 2.0',
    'WTFPL',
    'No license'
]

// writing data to README.md ... parameter: data: a string containing all content from generateMarkdown.js
function writeToFile(data) {
    fs.writeFile('./markdown/README.md', readmeGen.generateMarkdown(data), (err) =>
    err ? console.log(err) : console.log(color.neonGreen('\nFind the generated README.md in the markdown folder')))
}

/* inquirer prompt questions for contents of README (I don't know why or how this comment became highlighted, but I can't figure out how to undo it and it's driving me crazy...)*/
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
            choices: [licenses]
                /*FIXME:'MIT', 'BSD 3-Clause', 'GNU GPL v3', 'CC0', 'No license'*/
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

//export getUserInfo() for data to be available to be passed into markdown generating functions
module.exports = {
    getUserInfo
}
