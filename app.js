const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(__dirname + '/public'))

app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname + '/public/main.html'));
});

app.get('/about', (req, res) => {
	res.sendFile(path.join(__dirname + '/public/about.html'));
});

app.get('/links', (req, res) => {
	res.sendFile(path.join(__dirname + '/public/links.html'));
});

app.get('/api', (req, res) => {
	if ( req.headers.username == 'TEST' && req.headers.password == 'PASSWORD' ) {
		res.send('{\"success\": true}');
	} else {
		res.send('{\"success\": false}');
	}
	if ( req.headers ) {
		console.log('We got some API requests!');
		console.log(req.headers);
	};
});

app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname + '/public/404.html'));
});

var server = app.listen(80, () => console.log('Server is listening on port 80'));
