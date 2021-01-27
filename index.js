const inquirer = require("inquirer");
const fs = require("fs");

// Array of questions for user input
const questions = [
  {
    type: "name",
    message: "What is the title of this project? ",
    name: "title",
  },
  {
    type: "input",
    message: "Enter a description for this project: ",
    name: "description",
  },
  {
    type: "input",
    message: "What are the steps required to install this project? ",
    name: "installation",
  },
  {
    type: "input",
    message: "Provide instructions and examples for use: ",
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
    name: "contributing",
  },
  {
    type: "input",
    message: "If tests are available, provide an example on how to run them: ",
    name: "tests",
  },
];

inquirer.prompt(questions).then((response) => {
  fs.writeFile("READYOU.md", writeToFile(response), (err) =>
    err ? console.log(err) : console.log("Success!")
  );
});

const writeToFile = ({
  title,
  description,
  installation,
  usage,
  license,
  contributing,
  tests,
}) =>
  `# Title
${title}

## Description
${description}

## Installation
${installation}

## Usage
${usage}

## License
This application is covered under the ${license} license.

## Contributing
${contributing}

## Tests
${tests}
`
;
