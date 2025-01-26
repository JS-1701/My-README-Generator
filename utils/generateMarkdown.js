// // TODO: Create a function that returns a license badge based on which license is passed in
// // If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'MIT') {
      return '![license](https://img.shields.io/badge/License-MIT-blue.svg)';
    } else if (license === 'GPL') {
      return '![License](https://img.shields.io/badge/License-GPL-blue.svg)';
  } else if (license === 'Apache 2.0') {
      return '![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)';
  } else {
      return '';
  }
}

// // TODO: Create a function that returns the license link
// // If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license == 'None') {
    console.log('license is none');
    return "";
  } else { 
    console.log('license should not be none');
    console.log('license = ' + license);
    return `- [License](#license)`;

  }
}
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === 'MIT') {
      return 'This project is licensed under the [MIT](https://opensource.org/licenses/MIT) license.';
  } else if (license === 'GPL') {
      return 'This project is licensed under the [GPL](https://www.gnu.org/licenses/gpl-3.0) license.';
  } else if (license === 'Apache 2.0') {
      return 'This project is licensed under the [Apache 2.0](https://opensource.org/licenses/Apache-2.0) license.';
  } else {
      return '';
  }
}

function generateMarkdown(data) {
  console.log('title = ' + data.title);
  console.log('data.installation = ' + data.installation);
  return `# ${data.title} 
${renderLicenseBadge(data.license)}
## Description 
${data.description}
## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
${renderLicenseLink(data.license)}
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)
## Installation
${data.installation}
## Usage
${data.usage}
## License
${renderLicenseSection(data.license)}
## Contributing
${data.contribution}
## Tests
${data.test}
## Questions
-If you have any questions contact me at ${data.email}!
You can find more of my work at [${data.github}](https://github.com/JS-1701).
`;
}
export default generateMarkdown;