const data = require('.\README-generator\index.js')

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {

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

// TODO: Create a function to generate markdown for README
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
;
}

module.exports = {
  generateMarkdown
};
