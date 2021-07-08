const profiles = require(""); //Connect to where the output happens???
const fs = require("fs");
const inquirer = require("inquirer");

const employee = require("./Util/employee")
const engerineer = require("./Util/engineer")
const manager = require("./Util/manager")
const intern = require("./Util/intern")

function beginQuestions() {
    inquirer.prompt([
        {
            message: "Please select the type of team member you want to add",
            name: "Team Member",
        }
    ])
}