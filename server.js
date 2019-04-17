// var http = require('http')
// http.createServer(function (request, response) {
//     response.writeHead(200, { "Content-type": "text/plain" })
//     response.end("Helloooooo\n")
// }).listen(process.env.PORT)
// console.log("iep");

var express = require("express");
var bodyParser = require("body-parser");
var mongodb = require("mongodb");

var app = express();

var docs = { test: "testing" };

app.use(bodyParser.json());

// Initialize the app.
var server = app.listen(process.env.PORT || 8080, function () {
    var port = server.address().port;
    console.log("App now running on port", port);
});


// CONTACTS API ROUTES BELOW

// Generic error handler used by all endpoints.
function handleError(res, reason, message, code) {
    console.log("ERROR: " + reason);
    res.status(code || 500).json({ "error": message });
}

/*  "/api/contacts"
 *    GET: finds all contacts
 *    POST: creates a new contact */
app.get("/api/contacts", function (req, res) {
    res.status(200).json(docs);
});
