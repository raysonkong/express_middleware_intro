const express = require('express');
const app = express();
const port = 3000;

// Express is just two things
// 1. router
// 2. Middleware functions that form a web framework


// Write your own middleware
function validateUser(req, res, next) {
    // Do stuff to validate res


    // Pretend that validation is done
    res.locals.validated = true;
    console.log("Validated Ran!")
    next(); // Hand control to next middleware
}


// Specify routes that would run middleware
// So app.use is just like app.get, app.post ......
app.use('/admin', validateUser);


app.get("/",(req, res, next) => {
    res.send("<h1>Main Page</h1>");
    console.log(res.locals.validated)
})

app.post("/admin",(req, res, next) => {
    res.send("<h1>This is Admin page</h1>");
    console.log(res.locals.validated)
})

app.listen(port, () => console.log(`App is running on ${port}`))