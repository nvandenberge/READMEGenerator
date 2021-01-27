const inquirer = require("inquirer");

inquirer
  .prompt([
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
  ])
  .then((response) => console.log(response));
