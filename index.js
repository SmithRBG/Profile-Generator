const output = require(""); //Connect to where the output happens???
const fs = require("fs");
const inquirer = require("inquirer");
const style = require("./Template/style")

const employee = require("./Util/employee")
const engineer = require("./Util/engineer")
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