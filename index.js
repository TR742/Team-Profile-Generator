const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./src/generateMarkdown');

const questions = [
    {
        type: 'input',
        message: 'Please enter the full name of the Team manager',
        name: 'managerName'
    },
    {
        type: 'input',
        message: 'Please enter the Team manager employee ID',
        name: 'managerId'
    },
    {
        type: 'input',
        message: 'Please enter the Team manager email address',
        name: 'managerEmail',
    },
    {
        type: 'input',
        message: 'Please enter the Team manager office number',
        name: 'managerNumber',
    }
]

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err)
            throw err;
    })
}

function init() {
    inquirer.prompt(questions)
    .then(function (userInput) {
        writeToFile("./dist/myTeamProfile.html", generateMarkdown(userInput));
    })
};

init();