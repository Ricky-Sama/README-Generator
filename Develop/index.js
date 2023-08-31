// Packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown.js")

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the title of your project?",
    },
    {
        type: "input",
        name: "description",
        message: "Please enter a description of your project.",
    },
    {
        type: "input",
        name: "installation",
        message: "Please provide installation instructions.",
    },
    {
        type: "input",
        name: "usage",
        message: "Please enter instructions on how to use your application.",
    },
    {
        type: "input",
        name: "contribution",
        message: "Provide guidelines on how others can contribute.",
    },
    {
        type: "input",
        name: "test",
        message: "Provide examples on testing application if applicable.",
    },
    {
        type: "checkbox",
        name: "license",
        message: "Please select a license from the following choices:",
        choices: ["MIT", "Apache license 2.0", "Boost Software License 1.0", "Creative Commons license family", "Mozilla Public License 2.0", "Open Software License 3.0", "none" ],
    },
    {
        type: "input",
        name: "github",
        message: "Enter your github username.",
    },
    {
        type: "input",
        name: "email",
        message: "Please enter a valid email address.",
    },


];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
      if (err) {
        console.error('Error writing to file:', err);
      } else {
        console.log(`${fileName} has been created successfully.`);
      }
    });
  }

// TODO: Create a function to initialize app
function init() {
    inquirer
      .prompt(questions)
      .then((responses) => {
        console.log("Creating README.md file...");
        writeToFile('./utils/README.md', generateMarkdown({...responses}));
      });
  }

// Function call to initialize app
init();
