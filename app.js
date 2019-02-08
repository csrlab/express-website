var express = require('express');
var path = require('path');
// var jade = require('jade');
var bodyParser = require('body-parser');
var nodemailer = require('nodemailer');

var app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname,'public')));

app.get('/', function(req, res) {
	// console.log('Start!');
	// res.send('<h1>Oya!</h1>');
	res.render('index', {title: 'Daveux Hosts!'});

});
app.get('/about', function(req, res) {
	res.render('about');
		
});
app.get('/contact', function(req, res) {
	res.render('contact');
});
app.post('/contact/send', function(req, res) {
    let transporter = nodemailer.createTransport({
		service: 'Gmail',
		auth: {
			user: 'daveux67@gmail.com',
			pass: ''
		}
	});
    let mailOptions = {
    	from: 'Daveux <daveux67@gmail.com>'
	}

});

app.listen(3000);
console.log('Server is running on port 3000...')