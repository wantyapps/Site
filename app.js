const express = require("express"); // Express is a Node.JS Server Hoster/Runner
const path = require("path"); // Used to determine what is the current directory
const app = express(); // Initializing App

app.use(express.static(__dirname + "/public")) // Making sure all of the Assets/Files are in a certain directory

app.get("/", (req, res) => { // Routing the Main Route
	res.sendFile(path.join(__dirname + "/public/main.html")); // Rendering the Main HTML File
});

app.get("/about", (req, res) => { // Routing the "About" Route
	res.sendFile(path.join(__dirname + "/public/about.html")); // Rendering the "About" HTML File
});

app.get("/links", (req, res) => { // Routing the "Links" Route
	res.sendFile(path.join(__dirname + "/public/links.html")); // Rendering the "Links" HTML File
});

const PORT = 80; // Saving the Port to a variable

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`)); // Running the server on the saved PORT variable

// Ta-Dah!
