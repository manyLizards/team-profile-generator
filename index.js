//Include Inquirer, file system, and generateMarkdown
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('../utils/generateMarkdown');

//Create an array of questions for user input
const questions = [
    //manager information
    {
        type: 'input',
        name: 'manager-name',
        message: "Please enter the team manager's name",
    },
    {
        type: 'input',
        name: 'manager-id',
        message: "Please enter the team manager's ID",
    },
    {
        type: 'input',
        name: 'email',
        message: "Please enter the team manager's email",
    },
    {
        type: 'input',
        name: 'manager-number',
        message: "Please enter the team manager's office number",
    },
    // add option to choose intern or engineer
    {
        type: 'checkbox',
        name: 'intern-engineer-finish',
        message: "Add a team member or finish building your team.",
        choices: ['Add an engineer', 'Add an intern', 'Finish building your team']
    },
]