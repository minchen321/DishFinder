var express = require('express');
var path = require('path');
var exphbs = require('express-handlebars');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');


// Init App
var app = express();

// View Engine
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', exphbs({defaultLayout:'main'}));
app.set('view engine', 'handlebars');


// BodyParser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// Set Static Folder
app.use(express.static(path.join(__dirname, 'public')));

// Express Session
app.use(session({
    secret: 'secret',
    saveUninitialized: true,
    resave: true
}));



//Set controllers
app.use(require('./controllers'));



// Set Port
app.set('port', (process.env.PORT || 3000));

app.listen(app.get('port'), function(){
	console.log('Server started on port '+app.get('port'));
});