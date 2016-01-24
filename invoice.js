// this sets up express, making it easier to start the generator 
var app = require('express')();

var handle = require('handlebars');

// this enables the server starter to work 
var http = require('http').Server(app);

//this sets up the layout with handlebars
var handlebars = require('express-handlebars').create({

		defaultLayout: 'main'
});

app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

//this is the link to the main page
app.get('/', function(req, res){
res.render('home');
});

//this starts the server 
http.listen(3000, function(){
console.log('Invoice Generator is Online!');
});
