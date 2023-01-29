// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "projectTitle",
    message: "What is the title of your project?",
  },
  {
    type: "input",
    name: "description",
    message: "Provide a brief description of your project:",
  },
  {
    type: "input",
    name: "installation",
    message: "Provide instructions on how to install your project:",
  },
  {
    type: "input",
    name: "usage",
    message: "Provide information on how to use your project:",
  },
  {
    type: "list",
    name: "license",
    message: "Provide lincenses that you want to use on this project",
    choices: ['MIT', 'GPLv3', 'Apache', 'None']
  },
  {
    type: "input",
    name: "contributing",
    message: "Provide contributions:",
  },
  {
    type: "input",
    name: "tests",
    message: "Provide examples on how to run tests for your project:",
  },
  {
    type: "input",
    name: "Contact",
    message: "Provide contact email for questions:",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (error) => {
    if (error) throw err;
    console.log("The file has been saved");
  });
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((answers) => {
    let markdown = `# ${answers.projectTitle} \n\n`;
    markdown += `## Description \n\n${answers.description} \n\n`;
    markdown += `## Installation \n\n${answers.installation} \n\n`;
    markdown += `## Usage \n\n${answers.usage} \n\n`;
    markdown +=
      `## License \n\nThis project is licensed under the ${answers.license} license. \n\n`;
    markdown += `## Contributing \n\n${answers.contributing} \n\n`;
    markdown += `## Tests \n\n${answers.tests} \n\n`;
    markdown += `## Questions \n\n Please contact me in the following email: \n ${answers.Contact} \n\n`
    writeToFile("README.md", markdown);
  });
}

init();
