const fs = require("fs");
const inquirer = require("inquirer");
const style = require("./Template/style")

// pulling in connected js files
const Engineer = require("./Util/engineer")
const Manager = require("./Util/manager")
const Intern = require("./Util/intern");
const Team = []
//connecting information that will render the files
const OUTPUT_DIR = path.resolve(__dirname, "output")
const outputPath = path.join(OUTPUT_DIR, "team.html"); //check to see if this needs to change to template
const render = require("./Template/template.html");
//this starts the prompts for the terminal
function beginQuestions() {
    inquirer.prompt([
        {
            type: "list",
            message: "Please select the type of team member you want to add",
            name: "TeamMember",
            choices: [
                "engineer",
                "manager",
                "intern",
                "No one else",
            ],
        }
    ])
    //using a switch case to input information depending on selection above
    .then(userSelect => {
        switch(userSelect.TeamMember) {
            case "engineer":
                addEngineer()
                break
            case "intern":
                addIntern()
                break
            case "manager":
                addManager()
                break
            default:
                createHTML()
        }
    })
}

beginQuestions()

function addEngineer() {
    inquirer.prompt([
        {
            type: "input",
            message: "What is their name?",
            name: "EngName",
        },
        {
            type: "input",
            message: "What is their ID?",
            name: "EngID",
        },
        {
            type: "input",
            message: "What is their email?",
            name: "EngEmail",
        },
        {
            type: "input",
            message: "What is their github?",
            name: "EngGithub",
        },
    ])
    .then(data => {
        const engineer = new Engineer (data.EngName, data.EngID, data.EngEmail, data.EngGithub)
        Team.push(engineer)
        beginQuestions()
    })
}

function addIntern() {
    inquirer.prompt([
        {
            type: "input",
            message: "What is their name?",
            name: "InName",
        },
        {
            type: "input",
            message: "What is their ID?",
            name: "InID",
        },
        {
            type: "input",
            message: "What is their email?",
            name: "InEmail",
        },
        {
            type: "input",
            message: "What is their School?",
            name: "InSchool",
        },
    ])
    .then(data => {
        const intern = new Intern (data.InName, data.InID, data.InEmail, data.InSchool)
        Team.push(intern)
        beginQuestions()
    })
}

function addManager() {
    inquirer.prompt([
        {
            type: "input",
            message: "What is their name?",
            name: "ManName",
        },
        {
            type: "input",
            message: "What is their ID?",
            name: "ManID",
        },
        {
            type: "input",
            message: "What is their email?",
            name: "ManEmail",
        },
        {
            type: "input",
            message: "What is their office number?",
            name: "ManNumber",
        },
    ])
    .then(data => {
        const manager = new Manager (data.ManName, data.ManID, data.ManEmail, data.ManNumber)
        Team.push(manager)
        beginQuestions()
    })
}

function createDocument(member) {
    const name = member.getName();
    const id = member.getId();
    const email = member.getEmail();
    const role = member.role();
    let data = '';

    if(role === "engineer") {
        const github = member.github();
        data = `<div class="container">
        <div class="row"><div class="col-6">
        <div class="card mx-auto mb-3" style="width: 18rem">
        <h5 class="card-header">${name}<br /><br />Role</h5>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">${id} </li>
            <li class="list-group-item"> ${email}</li>
            <li class="list-group-item">${github} </li>
        </ul>
        </div>
    </div>`
    } 

    else if (role === "intern") {
        const school = member.school();
        data = `<div class="container">
        <div class="row"><div class="col-6">
        <div class="card mx-auto mb-3" style="width: 18rem">
        <h5 class="card-header">${name}<br /><br />Role</h5>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">${id} </li>
            <li class="list-group-item"> ${email}</li>
            <li class="list-group-item">${school} </li>
        </ul>
        </div>
    </div>`
    }

    else if (role === "manager") {
        const office = member.office();
        data = `<div class="container">
        <div class="row"><div class="col-6">
        <div class="card mx-auto mb-3" style="width: 18rem">
        <h5 class="card-header">${name}<br /><br />Role</h5>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">${id} </li>
            <li class="list-group-item"> ${email}</li>
            <li class="list-group-item">${office} </li>
        </ul>
        </div>
    </div>`
    }

    console.log("adding team member");
        fs.appendFile("./output/team.html", data, function (err) {
            if (err) {
                return reject(err);
            };
            return resolve();
        });
};
    

//This will render the file
function createHTML() {
    if (!fs.existsSync(OUTPUT_DIR)) {
      fs.mkdirSync(OUTPUT_DIR)
    }
    fs.writeFileSync(outputPath, render(Team), "utf-8");
  }

  createDocument();