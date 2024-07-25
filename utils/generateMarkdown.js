// Return a license badge based on the passed-in license chosen by the user; if no license chosen, an empty string is returned
function renderLicenseBadge(license) {
  
  switch (license) {
    case 'MIT': 
      return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]';
    case 'BSD 3-Clause':
      return '[![License](https://img.shields.io/badge/License-BSD_3--Clause-grey.svg)]';
    case 'GNU GPL v3':
      return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]';
    case 'CC0':
      return '[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)]';
    case 'Apache 2.0':
      return '[![License](https://img.shields.io/badge/License-Apache_2.0-purple.svg)]';
    case 'WTFPL':
      return '[![License: WTFPL](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)]';
    case 'No license':
      return '';
    default:
      console.log("This shouldn't be possible. What TF did you do? Start over. Sigh");
      break;
  }
  renderLicenseSection(license);
}

// Return the URL to info on the passed-in license chosen by the user; if no license was chosen, returns an empty string
function renderLicenseLink(license) {

  switch (license) {
    case 'MIT': 
      return  '(https://opensource.org/licenses/MIT)';
    case 'BSD 3-Clause':
      return '(https://opensource.org/licenses/BSD-3-Clause)';
    case 'GNU GPL v3':
      return  '(https://www.gnu.org/licenses/gpl-3.0)';
    case 'CC0':
      return '(http://creativecommons.org/publicdomain/zero/1.0/)';
    case 'Apache 2.0':
      return  '(https://opensource.org/licenses/Apache-2.0)';
    case 'WTFPL':
      return  '(http://www.wtfpl.net/about/)';
    case 'No license':
      return '';
    default:
      console.log("This shouldn't be possible. What TF did you do? Start over. Sigh");
      break;
  }

  renderLicenseSection(license);
}

// Renders the license section of README; if the user chose no license, returns an empty string
function renderLicenseSection(license) {
  if (license === 'No license') {
    return `\n\n## License\n\n None.`
  } else {
    const licenseLink = renderLicenseLink(license);
    const licenseBadge = renderLicenseBadge(license);
    return `\n\n## License\n\n **${license}** ${licenseBadge}${licenseLink}`
  }
}

//create Title in markdown to be called in generateMarkdown()
function renderTitle(title) {
    return `# ${title}`;
}

//create generic Section format to be called for content sections in generateMarkdown()
function renderSection(sectionTitle, content) {
  return `\n\n## ${sectionTitle} \n\n${content}`;
}

// create Questions Section to be called in generateMarkdown()
function renderQuestionsSection(username, email) {
  return `\n\n## Questions\n` + 
  `My GitHub username is ${username}, and you may access my GitHub profile by clicking this [link.](https://www.github.com/${username})\n\n` +
  `If you have any questions, please send them to me at ${email}.`
}

//create Table of Contents section to be called in generateMarkdown()
function renderTOC() {
  return `\n\n## Table of Contents` +
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
  console.log(data)
  
  const {username, email, title, description, installation, usage, license, contributing, tests} = data
 
  const readme =
  renderTitle(title) +
  renderTOC(title) +
  renderSection('Description', description) +
  renderSection('Installation', installation) +
  renderSection('Usage', usage) +
  renderSection('Contributing', contributing) +
  renderSection('Tests', tests) +
  renderLicenseSection(license) +
  renderQuestionsSection(username, email);
  return readme
}

//exporting generateMarkdown function only as remaining functions only used by that function to generate the string of markdown code to be written to the new README.md
module.exports = {
  generateMarkdown
};
