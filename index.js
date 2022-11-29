//Include Inquirer, file system, and generateMarkdown
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('../utils/generateMarkdown');

//Create an array of questions for user input regarding manager information
const start = [
    {
        type: 'input',
        name: 'manager-name',
        message: "Please enter the team manager's name.",
    },
    {
        type: 'input',
        name: 'manager-id',
        message: "Please enter the team manager's ID.",
    },
    {
        type: 'input',
        name: 'email',
        message: "Please enter the team manager's email address.",
    },
    {
        type: 'input',
        name: 'manager-number',
        message: "Please enter the team manager's office number.",
    }
]

    // add option to choose intern or engineer
const menu = [
    {
        type: 'checkbox',
        name: 'intern-engineer-finish',
        message: "Add a team member or finish building your team.",
        choices: ['Add an engineer', 'Add an intern', 'Finish building your team']
    },
]

//Create an array of questions for user input regarding an engineer
const engineer = [
    {
        type: 'input',
        name: 'engineer-name',
        message: "Please enter the engineer's name."
    },
    {
        type: 'input',
        name: 'engineer-id',
        message: "Please enter the engineer's ID."
    },
    {
        type: 'email',
        name: 'engineer-email',
        message: "Please enter the engineer's email address."
    },
    {
        type: 'input',
        name: 'engineer-github',
        message: "Please enter the engineer's GitHub username."
    }
]

//Create an array of questions for user input regarding an intern
const intern = [
    {
        type: 'input',
        name: 'intern-name',
        message: "Please enter the intern's name."
    }
]