var express = require('express');
var app = express();
var path = require('path');
const bodyParser = require('body-parser');
var router = express.Router();
var fs = require('fs')

var FILENAME = 'CLIENTE-4-mensagem.txt';

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: true
}));

app.get('/', function (req, res) {
	res.sendFile(path.join(__dirname + '/index.html'));
});

app.post('/action_page', function (req, res) {
	console.log(req.body)
	var data = req.body["to"] + "\n" + req.body["message"];
	fs.writeFile(FILENAME, data, (err) => {
		if (err) console.log(err);
		console.log("Successfully Written to File.");
	});
	
	res.send("Mensagem enviada com sucesso!")
})

app.get('/read_file', function (req, res) {

	fs.readFile(FILENAME, 'utf8', function (err, data) {
		if (err) throw err;
		console.log(data);
	});
})


const port = process.env.PORT || 3000;
app.listen(port, function () {
	console.log('Example app listening on port 3000!');
});