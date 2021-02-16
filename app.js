const express = require('express');
const path = require('path');
const app = express();

function get_API_requests(request) {
	return request.headers;
};

function process_user_agent(user_agent) {
	if ( user_agent == "Official Go Wantyapps Site API" ) {
		return "Official API Client detected";
	} else if ( user_agent == "Official Python Wantyapps Site API" ) {
		return "Official API Client detected";
	} else {
		return "The API client used to request is not official.";
	};
};

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
		console.log(get_API_requests(req));
		console.log(process_user_agent(req.headers['user-agent']));
	};
});

app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname + '/public/404.html'));
});

var server = app.listen(80, () => console.log('Server is listening on port 80'));
