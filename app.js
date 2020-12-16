const express = require("express");
const path = require("path");
const app = express();

app.use(express.static(__dirname + "/public"))

app.get("/", (req, res) => {
	res.sendFile(path.join(__dirname + "/public/main.html"));
});

app.get("/about", (req, res) => {
	res.sendFile(path.join(__dirname + "/public/about.html"));
});

const PORT = 80;

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));
