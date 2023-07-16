// const http = require("http");

// var args = process.argv.slice(2);
// const port = args[0];

// const httpListener = function (req, res) {
// 	listener(req, res, "80");
// };

// const httpsListener = function (req, res) {
// 	listener(req, res, "443");
// };

// function listener(req, res, port) {
// 	res.writeHead(200);
// 	res.end(`Responding on port ${port}`);
// 	console.log(`Responding to IP address: ${req.headers["x-forwarded-for"]}`);
// }

// const httpServer = http.createServer(httpListener);
// const httpsServer = http.createServer(httpsListener);
// httpServer.listen("80", () => {
// 	console.log(`Server is running on http://127.0.0.1:80`);
// });
// httpsServer.listen("443", () => {
// 	console.log(`Server is running on https://127.0.0.1:443`);
// });

const fs = require('fs');
const https = require('https');
const express = require('express');

// Create an Express app
const app = express();

// Automatically serve index.html
app.use(express.static(__dirname));

// For any other route, serve a "404 Not Found" response
app.use((req, res) => {
	res.status(404).send('Page not found');
});

// Specify the options for HTTPS server
const options = {
  key: fs.readFileSync('/srv/secure/private-key.pem'),
  cert: fs.readFileSync('/srv/secure/certificate.pem')
};

// Create the HTTPS server
const server = https.createServer(options, app);

// Start the server
server.listen(443, () => {
  console.log('Server is running on port 443');
});


// Examples

// Defining routes
// app.get('/', (req, res) => {
//   res.send('Hello, HTTPS!');
// });