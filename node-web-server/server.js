const express = require('express');
const hbs = require('hbs');
const fs = require('fs');

var app = express();

hbs.registerPartials(__dirname + '/views/partials')// __dirname storepath to project directory
app.set('view engine','hbs');

// middleware
// app.use((req,res,next) => {
//   res.render('maintenance.hbs');
// });
app.use((req,res,next) => {
  var now = new Date().toString();
  var log = `${now}: ${req.originalUrl}`
  fs.appendFile('server.log',log + "\n", (err) => {
    if(err){
      console.log('Unable to append to server.log');
    }
  });
  console.log(log)
  next();// next() runs when middleware function is done,
     // if next() is not called , any of the routes(/*) will never fire
});

app.use(express.static(__dirname + '/public' ));

hbs.registerHelper('getCurrentYear',() => {
  return new Date().getFullYear();
});
hbs.registerHelper('screamIt',(text) => {
  return text.toUpperCase();
});

app.get('/',(req,res) => {
  // res.send('<h1>Hello Express!</h1>');
  res.render('home.hbs',{
    pageTitle: 'Home Page',
    welcomeMessage: 'Welcome to home page',
  });
});

app.get('/about',(req,res) => {
    res.render('about.hbs',{
      pageTitle: 'About Page',
    });
});

app.get('/bad',(req,res) => {
    res.send({
      errorMessage:'Bad Request'
    });
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
