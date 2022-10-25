// node modules
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./util/generateHTML');
console.log("Welcome to my README generator.")
console.log("Answer the following questions to generate a high quality README for your project.")
// inquirer to generate questions
const questions =
    [
        {
            type: 'input',
            message: "What's the project title?",
            name: 'title',
        },
        {
            type: 'imput',
            message: 'Please describe your project.',
            name: 'description',
        },
        {
            type: 'input',
            message: "What are the installation instructions for your project?",
            name: 'installation',
        },
        {
            type: 'input',
            message: "What are the usage information for your project?",
            name: 'usage',
        },
        {
            type: 'list',
            message: "Which license would you like to use?",
            choices: ["MIT", "Apache", "BSD", "Unlicense"],
            name: 'license',
        },
        {
            type: 'input',
            message: "What are the contribution guidelines for your project?",
            name: 'contributions',
        },
        {
            type: 'input',
            message: "What are the tests instructions for your project?",
            name: 'tests',
        },
        {
            type: 'input',
            message: "What's your GITHUB username?",
            name: 'github',
        },
        {
            type: 'input',
            message: "What is your email?",
            name: 'email',
        },
    ]

// funcitons to write the README file
function writeToFile(data) {
    fs.writeFile('USERREADME.md', data, (err) =>
    err ? crossOriginIsolated.error(err) : console.log('README file is saved as USERNAME.md'))
}
// function that initializes the app
function init() {
    inquirer
        .prompt(questions)
        .then((responses) => writeToFile(generateMarkdown(responses)));
}

// function to call to initialize app 
init();