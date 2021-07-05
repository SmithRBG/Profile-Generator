const profileGenerator = require("./Util/profileGenerator");
const fs = require("fs");
const inquirer = require("inquirer");

/* const questions = [
    {
        type: "input",
        message: "What is the employee's name?",
        name: "Name",
        validate: (value) =>{if(value) {return true} else {return "Please input a response."}},
    },
    {
        type: "input",
        message: "What is the employee's ID?",
        name: "Id",
        validate: (value) =>{if(value) {return true} else {return "Please input a response."}},
    },
    {
        type: "input",
        message: "What is the employee's email?",
        name: "Email",
        validate: (value) =>{if(value) {return true} else {return "Please input a response."}},
    },
] */

class employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }
    getName() {
        console.log(`Employee Name: ${this.name}`);
    }
    getId() {
        console.log(`Employee Id: ${this.id}`);
    }
    getEmail() {
        console.log(`Employee Email: ${this.email}`);
    }
}