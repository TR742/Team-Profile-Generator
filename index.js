const inquirer = require('inquirer');

const questions = [
    {
        type: 'input',
        message: 'Please enter the full name of the Team manager',
        name: 'manager-name'
    },
    {
        type: 'input',
        message: 'Please enter the Team manager employee ID',
        name: 'manager-id'
    },
    {
        type: 'input',
        message: 'Please enter the Team manager email address',
        name: 'manager-email',
    },
    {
        type: 'input',
        message: 'Please enter the Team manager office number',
        name: 'manager-number',
    }
]

function init() {
    inquirer.prompt(questions)
    .then(function (userInput) {
        console.log(userInput);
    })
}

init();