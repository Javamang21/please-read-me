
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if (license === 'No License') {
        return '';
    };
    if (license === 'MIT License') {
        return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
    };
    if (license === 'Apache License 2.0') {
        return `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
    };
    if (license === 'BSD 3-Clause License') {
        return `[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`
    };
    if (license === 'Mozilla Public License 2.0') {
        return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`
    };
    if (license === 'GNU GPL v3 License') {
        return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`
    };
    
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    if (license === 'No License') {
        return '';
    };
    if (license === 'MIT License') {
        return `https://opensource.org/licenses/MIT`
    };
    if (license === 'Apache License 2.0') {
        return `https://opensource.org/licenses/Apache-2.0`
    };
    if (license === 'BSD 3-Clause License') {
        return `https://opensource.org/licenses/BSD-3-Clause`
    };
    if (license === 'Mozilla Public License 2.0') {
        return `https://opensource.org/licenses/MPL-2.0`
    };
    if (license === 'GNU GPL v3 License') {
        return `https://www.gnu.org/licenses/gpl-3.0`
    };
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}


function generateMarkdown(data) {
return `# ${data.title}
${renderLicenseBadge(data.license)}

${renderLicenseLink(data.license)}

---
## Table Of Contents
---
* [Project Description](#description)
* [Installation Instructions](#installation)
* [Usage Information](#usage)
* [Contribution Guidelines](#contribution)
* [How to test it](#test)
* [Questions ?](#myinfo)

---

<a id="description"></a>
## Project Description
${data.description}

---

<a id="installation"></a>
## Installation Instructions
${data.installation}

---

<a id="usage"></a>
## Usage Information
${data.usage}

---

<a id="contribution"></a>
## Contribution Guidelines
${data.contribution}

---

<a id="d">test</a>
## How to test it
${data.test}

---

<a id="myinfo"></a>
## Questions
If you have any questions please contact me through github or email address. 
- Github: https://github.com/${data.github}

- Email: ${data.email}
  `;
  }

  module.exports = generateMarkdown;

//   [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

//   [![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)

//   [![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)

//   [![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)

//   [![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)