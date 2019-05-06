var express = require('express');
var app = express();
var path = require('path');
const bodyParser = require('body-parser');
var router = express.Router();
var fs = require('fs')
const _from = "guceconelli@gmail.com"
const email = require('./emailServer.js')

var FILENAME_SENT = 'CLIENT4-CLIENT1-mensagem.txt';
var FILENAME_RECEIVED = 'CLIENT4-CLIENT1-mensagem.txt'; //SERVER4-SERVER1-mensagem.txt

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: true
}));

app.get('/', function (req, res) {
	exec('');
	res.sendFile(path.join(__dirname + '/index.html'));
});

app.post('/action_page', function (req, res) {
	res.send("Email enviado!!!")
	console.log(req.body)

	var user = new email.User("guceconelli@gmail.com");
	user.writeEmail(req.body["to"], req.body["message"]);

})

app.get('/read_file', function (req, res) {


	// var Email = new email.Email("CLIENTE4-CLIENTE1-mensagem.txt");

	var fileTextArray = [];
	var userFrom;

	var content = "";

	fs.readFile("CLIENT4-CLIENT1-mensagem.txt", 'utf8', function (err, data) {
		if (err) throw err;
		console.log(data);
		fileTextArray = data.split(/\s+/); // array de string com as strings do arquivo
		console.log(fileTextArray);

		userFrom = fileTextArray[3];
		var userTo = [];
		// var content = "";

		var buffer;
		for (buffer = 4; buffer < fileTextArray.length; buffer++) {
			// console.log("fileTextArray: "+fileTextArray[buffer]);
			if (fileTextArray[buffer] == "TO:") {
				this.userTo.push(fileTextArray[buffer + 1]);
			}
			if (fileTextArray[buffer] == "DATA") {

				break;
			}
		}

		buffer++;

		while (fileTextArray[buffer] != ".") {
			console.log("fileTextArray: " + fileTextArray[buffer]);
			content += fileTextArray[buffer] + " ";
			buffer++;
		}

		res.send(content);
	});

	// res.send(Email);
})


const port = process.env.PORT || 3000;
app.listen(port, function () {
	console.log('Example app listening on port 3000!');
});