const inquirer = require("inquirer");
const fs = require("fs");

const confirmAnswers = (input) => {
  if (!input) {
    return "Please provide a response";
  }
  return true;
};

// Array of questions for user input
const questions = [
  {
    type: "name",
    message: "What is the title of this project? ",
    name: "title",
    validate: confirmAnswers,
  },
  {
    type: "input",
    message: "Enter a description for this project: ",
    name: "description",
    validate: confirmAnswers,
  },
  {
    type: "input",
    message: "What are the steps required to install this project? ",
    name: "installation",
  },
  {
    type: "input",
    message: "Provide instructions and examples of usage: ",
    name: "usage",
  },
  {
    type: "list",
    message: "Choose a license for this project: ",
    name: "license",
    choices: ["Apache", "GNU", "MIT", "BSD", "Eclipse", "Mozilla", "Unlicense"],
  },
  {
    type: "input",
    message: "List any collaborators, with links to their GitHub profiles: ",
    name: "credits",
  },
  {
    type: "input",
    message: "If tests are available, provide an example on how to run them: ",
    name: "tests",
  },
  {
    type: "input",
    message: "Enter your GitHub username: ",
    name: "github",
  },
  {
    type: "input",
    message: "Enter your email address: ",
    name: "email",
  },
];

const init = () =>
  inquirer.prompt(questions).then((response) => {
    fs.writeFile("README.md", writeToFile(response), (err) =>
      err ? console.log(err) : console.log("README file has been generated!")
    );
  });

const writeToFile = ({
  title,
  description,
  installation,
  usage,
  license,
  credits,
  tests,
  github,
  email,
}) =>
  `# Title
${title}

![badge](https://img.shields.io/static/v1?label=license&message=${license}&color=green)

## Description
${description}

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Credits](#credits)
* [Tests](#tests)
* [Questions](#questions)

## Installation
${installation}

## Usage
${usage}

## License
This application is covered under the ${license} license.

## Credits
${credits}

## Tests
${tests}

## Questions
- [GitHub](https://github.com/${github})
- Email any questions to ${email}
`;

init();
