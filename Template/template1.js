var myFunc = function(Team, data, member) {
    /* var myString = Team[0].name */

    if (beginQuestions())

    return`<!DOCTYPE html>
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
      </div>

      <div class="container">
        <div class="row"><div class="col-6">
        <div class="card mx-auto mb-3" style="width: 18rem">
        <h5 class="card-header"><br><br></h5>
        <ul class="list-group list-group-flush">
            <li class="list-group-item"></li>
            <li class="list-group-item"></li>
            <li class="list-group-item"></li>
        </ul>
        </div>
    </div>
</body>
</html>`
};



module.exports = myFunc

/* 1. we should probably stilll use template1.js, since you're already calling that function in your createHTML function.

9:01
2. you'll wanna change the function in template1.js such that it digs into the array with a for-loop, and runs all the if-then logic you already wrote in your createDocument function.
9:02
3. THEN instead of using fs.appendFile, you could just add these data strings together, stick them in a template literal within div.container, and be done!
9:03
Nothing in your createDocument function is working because 1. you're not calling this function and 2. even if you DID call this function once, it might end up appending strings to the wrong place (outside the </html> tag, for instance).
 */