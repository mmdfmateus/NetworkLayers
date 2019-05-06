var express = require('express');
var app = express();
var path = require('path');
const bodyParser = require('body-parser');
var router = express.Router();
var fs = require('fs')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname+'/index.html'));
  // res.send('Hello World!');
});

app.post('/action_page',function(req, res) {
	res.send("ROLOU")
	console.log(req.body)
	var data = req.body["to"];
	fs.writeFile("temp.txt", data, (err) => {
  		if (err) console.log(err);
  		console.log("Successfully Written to File.");
	});
})

const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log('Example app listening on port 3000!');
});
