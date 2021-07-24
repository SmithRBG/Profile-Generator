/* const indexPrompts = require("./index.js"); */

const Engineer = require("../Util/engineer");
/*const intern = require("../Util/intern");
const manager = require("../Util/manager");  */

function createDocument(member) {
    return new promises(function(resolve, reject) { //helps with path.resolve
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
        <h5 class="card-header">${EngName}<br><br>${EngRole}</h5>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">${EngId} </li>
            <li class="list-group-item"> ${EngEmail}</li>
            <li class="list-group-item">${EngGithub} </li>
        </ul>
        </div>
    </div>`
    } 

    else if (role === "intern") {
        const school = member.school();
        data = `<div class="container">
        <div class="row"><div class="col-6">
        <div class="card mx-auto mb-3" style="width: 18rem">
        <h5 class="card-header">${InName}<br><br>${InRole}</h5>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">${InId} </li>
            <li class="list-group-item"> ${InEmail}</li>
            <li class="list-group-item">${InSchool} </li>
        </ul>
        </div>
    </div>`
    }

    else if (role === "manager") {
        const office = member.office();
        data = `<div class="container">
        <div class="row"><div class="col-6">
        <div class="card mx-auto mb-3" style="width: 18rem">
        <h5 class="card-header">${ManName}<br><br>${ManRole}</h5>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">${ManId} </li>
            <li class="list-group-item"> ${ManEmail}</li>
            <li class="list-group-item">${ManOffice} </li>
        </ul>
        </div>
    </div>`
    }

var myFunc = function(Team) {
    
    return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <link rel="stylesheet" href="./style.css">
    <title>Team Profile Generator</title>
</head>
<body>
    <div class="jumbotron jumbotron-fluid">
        <div class="container">
          <h1 class="display-4">Team Overview</h1>
          <p class="lead">Get radical results from this ace team.</p>
        </div>
      </div>`
};
      

    member.forEach(function(Team) {
        let 
    })

            `<div class="container">
            <div class="row"><div class="col-6">
            <div class="card mx-auto mb-3" style="width: 18rem">
            <h5 class="card-header"><br><br></h5>
            <ul class="list-group list-group-flush">
                <li class="list-group-item"> </li>
                <li class="list-group-item"> </li>
                <li class="list-group-item"></li>
            </ul>
            </div>
        </div>
        </body>
        </html>`

    };

