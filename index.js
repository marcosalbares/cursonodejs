var http = require("http"),
    fs = require("fs"),
    https = require("https");

var manej = function (request, response) {
    console.log("manej func");
    https.get('https://pub.s10.exacttarget.com/t3qqglgt245', (resp) => {
        let data = '';
        resp.on('data', (chuck) => {
            data += chuck;
        });
        resp.on('end', () => {
            // console.log(JSON.parse(data).explanation);
        });
    }).on("error", (err) => {
        console.log("Error: " + err.message);
    });

    response.end();
};

var server = http.createServer(manej);

server.listen(8080);