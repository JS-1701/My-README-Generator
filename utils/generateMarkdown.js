// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if (license === 'MIT') {
        return `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`;
    } else if (license === 'GPL') {
        return `![License: GPL](https://img.shields.io/badge/License-GPL-blue.svg)`;
    } else if (license === 'Apache') {
        return `![License: Apache](https://img.shields.io/badge/License-Apache-red.svg)`;
    } else {
        return '';
    }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    if (license === 'MIT') {
        return `[MIT](https://opensource.org/licenses/MIT)`;
    } else if (license === 'GPL') {
        return `[GPL](https://www.gnu.org/licenses/gpl-3.0)`;
    } else if (license === 'Apache') {
        return `[Apache](https://www.apache.org/licenses/LICENSE-2.0)`;
    } else {
        return '';
    }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    if (license === 'None') {
        return '';
    } else {
        return `## License
        This project is licensed under the ${license} license.`;
    }
}



// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
    return `# ${data.title}
    ${renderLicenseBadge(data.license)}
    ## Description
    ${data.description}
    ## Table of Contents
    - [Installation](#installation)
    - [Usage](#usage)
    - [License](#license)
    - [Contributing](#contributing)
    - [Tests](#tests)
    - [Questions](#questions)
    ## Installation
    To install necessary dependencies, run the following command:
    \`\`\`
    ${data.installation}
    \`\`\`
    ## Usage
    ${data.usage}
    ${renderLicenseSection(data.license)}
    ## Contributing
    ${data.contribution}
    ## Tests
    To run tests, run the following command:
    \`\`\`
    ${data.test}
    \`\`\`
    ## Questions
    If you have any questions about the repo, open an issue or contact me directly at ${data.email}. You can find more of my work at [${data.github}](`;

}

export default generateMarkdown;
