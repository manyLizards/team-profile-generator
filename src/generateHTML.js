// takes writeFileSync from the fs module
const {writeFileSync, writeFile} = require('fs');
const Manager = require('../lib/Manager');

//function to generate team HTML page using the data provided
function generateHTML(res) {
    writeFileSync('./dist/index.html', `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>My Team Profile</title>
        <link rel="stylesheet" href="style.css">
    </head>
    <body>
        <header>
            <h1>My Team</h1>
        </header>
        <div> `)
    //loops through passed through array and goes through each role
    for (const employee of res) {
        if (employee.confirmIntern === "Intern") {
            console.log(employee)
            writeFileSync(`./dist/index.html`, `
            <div>
            ${employee.name}
            Intern
            </div>
            <ul>
                <li>${employee.id}</li>
                <li><a href = "mailto: ${employee.email}">${employee.email}</a></li>
                <li>${employee.school}</li>
            </ul>
        </div>`, {flag: 'a'})
        }
        else if (employee.confirmEngineer === "Engineer") {
            console.log(employee)
            writeFileSync(`./dist/index.html`, `
            <div>
                <div>
                ${employee.name}
                Engineer
                </div>
                <ul>
                    <li>${employee.id}</li>
                    <li><a href="mailto:${employee.email}">${employee.email}</a></li>
                    <li><a href="${employee.github}">${employee.github}</a></li>
                </ul>
            </div>`, {flag: 'a'})
        } if (employee.confirmManager === "Manager") {
            console.log(employee)
            writeFileSync('./dist/index.html', `
            <div>
                <div>
                    ${employee.name}
                    Manager
                </div>
                <ul>
                    <li>${employee.id}</li>
                    <li><a href="mailto: ${employee.email}">${employee.email}</a></li>
                    <li>${employee.officeNumber}</li>
                </ul>
            </div>`, {flag: 'a'})
        }
    }
}

//exports function from module
module.exports = generateHTML