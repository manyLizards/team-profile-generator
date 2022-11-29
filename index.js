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
]