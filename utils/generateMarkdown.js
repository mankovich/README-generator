const data = require('./README-generator/index.js')
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  // const {license} = data
  
  switch (license) {
    case 'MIT': 
      return licenseBadge = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]';
    case 'BSD 3-Clause':
      return licenseBadge = '[![License](https://img.shields.io/badge/License-BSD_3--Clause-grey.svg)]';
    case 'GNU GPL v3':
      return licenseBadge = '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]';
    case 'CC0':
      return licenseBadge = '[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)]';
    case 'Apache 2.0':
      return licenseBadge = '[![License](https://img.shields.io/badge/License-Apache_2.0-purple.svg)]';
    case 'WTFPL':
      return licenseBadge = '[![License: WTFPL](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)]';
    case 'No license':
      return licenseBadge = '';
    default:
      colors.raindbow(console.log("This shouldn't be possible. What TF did you do? Start over. Sigh"));
      break;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  // const {license} = data

  switch (license) {
    case 'MIT': 
      return licenseLink = '(https://opensource.org/licenses/MIT)';
    case 'BSD 3-Clause':
      return licenseLink = '(https://opensource.org/licenses/BSD-3-Clause)';
    case 'GNU GPL v3':
      return licenseLink = '(https://www.gnu.org/licenses/gpl-3.0)';
    case 'CC0':
      return licenseLink = '(http://creativecommons.org/publicdomain/zero/1.0/)';
    case 'Apache 2.0':
      return licenseLink = '(https://opensource.org/licenses/Apache-2.0)';
    case 'WTFPL':
      return licenseLink = '(http://www.wtfpl.net/about/)';
    case 'No license':
      return licenseLink = '';
    default:
      colors.raindbow(console.log("This shouldn't be possible. What TF did you do? Start over. Sigh"));
      break;
  }
  // renderLicenseSection = (licenseLink) {};
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license, licenseBadge, licenseLink) {
  const {license} = data

  renderLicenseLink(license, licenseLink);
  renderLicenseBadge(license, licenseBadge);

  return `\n\n##License\n 
  **${license}** ${licenseBadge}${licenseLink}`
}

function renderTitle(data) {
  const title = data.title

  return `# ${title}`;
}

function renderSection(sectionTitle, content) {
  return `\n\n##${sectionTitle}\n${content}`;
}

function renderQuestionsSection(username, email) {
  const {username, email} = data.email

  return `\n\n##Questions\n` + 
  `My GitHub username is ${username}, and you may access my GitHub by clicking this [link.](https://www.github.com/${username})\n` +
  `If you have any questions, please send them to me at ${email}.`
}

function renderTOC(title) {
  return '\n\n##Table of Contents' + '\n-- ' + title +
  '\n - [Description](#Description)' + 
  '\n - [Installation](#Installation)' +
  '\n - [Usage](#Usage)' +
  '\n - [Contributing](#Contributing)' +
  '\n - [Tests](#Tests)' +
  '\n - [License](#License)' +
  '\n - [Questions](#Questions)';
}

// generate markdown code for README; compiling outside functions to build full README 
function generateMarkdown(data) {
  const {username, email, title, description, installation, usage, license, contributing, tests} = data
  
  renderTitle(title) +
  renderTOC(title) +
  renderSection('Description', description) +
  renderSection('Installation', installation) +
  renderSection('Usage', usage) +
  renderSection('Contributing', contributing) +
  renderSection('Tests', tests) +
  renderLicenseSection(license) +
  renderQuestionsSection(username, email);
}

//only exporting generateMarkdown function as remaining functions only used by that function to generate the string of code
module.exports = {
  generateMarkdown
};
