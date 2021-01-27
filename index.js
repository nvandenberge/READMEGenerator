const inquirer = require("inquirer");
const fs = require("fs");

// Array of questions for user input
const questions = [
  {
    type: "name",
    message: "What is the title of your project?",
    name: "title",
  },
  {
    type: "input",
    message: "Enter a descriptiion for your project:",
    name: "description",
  },
  {
    type: "input",
    message: "What are the steps required to install your project? ",
    name: "installation",
  },
  {
    type: "input",
    message: "Provide instructions and examples for use:",
    name: "usage",
  },
  {
    type: "input",
    message: "List your collaborators, if any, with links to their GitHub profiles:",
    name: "contributing",
  },
  {
    type: "input",
    message: "If tests are available, provide an example on how to run them:",
    name: "tests",
  },
];

inquirer.prompt(questions)
.then((response) => {
    fs.writeFile("READYOU.md", writeToFile(response), (err) =>
      err ? console.log(err) : console.log("Success!")
    );
  });

const writeToFile = ({ title, description, installation, usage, contributing, tests }) =>
`# Title
${title}

## Description
${description}

## Usage
${usage}

## Contributing
${contributing}

## Tests
${tests}

`
