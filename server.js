const express = require('express');
const app = express();
const port = 3000;

// Express is just two things
// 1. router
// 2. Middleware functions that form a web framework


// Write your own middleware
function validateUser(req, res, next) {
    // Get info out of the req Object
    // do some stuff with DB

    res.locals.validated = true;
    console.log("Validated Ran!")
    next(); // Hand control to next middleware
}


app.use('/admin', validateUser);

app.all("/",(req, res, next) => {
    res.send("<h1>Main Page</h1>");
    console.log(res.locals.validated)
})

app.all("/admin",(req, res, next) => {
    res.send("<h1>This is Admin page</h1>");
    console.log(res.locals.validated)
})


app.listen(port, () => console.log(`App is running on ${port}`))