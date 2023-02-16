//Include Inquirer, file system, and generateMarkdown
const inquirer = require('inquirer');
const fs = require('fs');
const generateHTML = require('./dist/generateHTML');

//jest
const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

//define officeteam
let officeTeam = [];


//An array of questions for user input regarding manager information
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

//Option to choose intern or engineer
const menu = [
    {
        type: 'checkbox',
        name: 'intern-engineer-finish',
        message: "Add a team member or finish building your team.",
        choices: ['Add an engineer', 'Add an intern', 'Finish building your team']
    },
]

//An array of questions for user input regarding an engineer
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

//An array of questions for user input regarding an intern
const intern = [
    {
        type: 'input',
        name: 'intern-name',
        message: "Please enter the intern's name."
    },
    {
        type: 'input',
        name: 'intern-id',
        message: "Please enter the intern's ID."
    },
    {
        type: 'input',
        name: 'intern-email',
        message: "Please enter the intern's email address."
    },
    {
        type: 'input',
        name: 'intern-school',
        message: "Please enter the intern's school."
    }
]

//A function to initialize the start questionnaire and lead to the menu
function questions(questionArray) {
    console.log("Initializing App")
    inquirer
    .prompt(questionArray)
    .then((employee) => {
        officeTeam.push(employee);
//Lead to intern or engineer questionnaire or finish the questionnaire depending on user input from menu
        if (employee.continue === 'Add an engineer') {
            ask(engineer);
        } else if (employee.continue === 'Add an intern') {
            ask(intern);
        } else {
            createProfile(officeTeam);
        }
    })
    .catch((er) => console.log(er));
}

//A function to write the HTML file
function createProfile(officeTeam) {
    const profiles = officeTeam.map((employee) => {
        const { name, id, email } = employee;
        return new Manager(name, id, email, officeNumber);
    })
    
    if(employee.hasOwnProperty("officeNumber")) {
        const { officeNumber } = employee;
        return new Manager(name, id, email, officeNumber);
    }
    
    if(employee.hasOwnProperty('github')) {
        const {github} = employee;
        return new Engineer(name, id, email, github);
    }
    
    if(employee.hasOwnProperty('school')) {
        const {github} = employee;
        return new Intern(name, id, email, github);
    }
}

//Function call to initialize app
questions(start)