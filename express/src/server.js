const path = require('path')
const express = require('express')
const ee = require('./ee')
const spawnPs = require('./spawnPs')
const spawnTests = require('./spawnTests')
const index = require('./index')
const currentDir = require('./currentDir')

const app = express()
app.use(express.static('public'))
console.log('add public dir', path.normalize(`${__dirname}/..`))
app.use(express.static(path.normalize(`${__dirname}/..`)))

setInterval(spawnPs, 1000)

const message = `Lancement de l'app Express: http://localhost:8000`
console.log(message)
const server = app.listen(8000)

spawnTests()
/*----------------------------------------------------------------------------------
 | Routes
 *----------------------------------------------------------------------------------
 |
 */

// Envoie l'index quelle que soit l'URL demandée
app.get('*', (req, res) => res.send(index))

/*----------------------------------------------------------------------------------
 | WebSockets: https://github.com/theturtle32/WebSocket-Node/blob/master/README.md
 *----------------------------------------------------------------------------------
 |
 */
var WebSocketServer = require('websocket').server;
// var http = require('http');

// var server = http.createServer(function(request, response) {
//     console.log((new Date()) + ' Received request for ' + request.url);
//     response.writeHead(404);
//     response.end();
// });
// server.listen(8080, function() {
//     console.log((new Date()) + ' Server is listening on port 8000');
// });

const wsServer = new WebSocketServer({
    httpServer: server,
    // You should not use autoAcceptConnections for production
    // applications, as it defeats all standard cross-origin protection
    // facilities built into the protocol and the browser.  You should
    // *always* verify the connection's origin and decide whether or not
    // to accept it.
    autoAcceptConnections: false
});

function originIsAllowed(origin) {
  // put logic here to detect whether the specified origin is allowed.
  return true;
}

wsServer.on('request', function(request) {
    if (!originIsAllowed(request.origin)) {
      // Make sure we only accept requests from an allowed origin
      request.reject();
      console.log((new Date()) + ' Connection from origin ' + request.origin + ' rejected.');
      return;
    }

    var connection = request.accept('echo-protocol', request.origin);
    console.log((new Date()) + ' Connection accepted.');
    // connection.sendUTF(JSON.stringify({
    //       type: 'dir:changed',
    //     data: currentDir.currentDir
    // }))
    ee.on('message', msg => {
        // console.log('ee received', msg)
        connection.sendUTF(msg);
    })

    connection.on('message', function(message) {
        if (message.type === 'utf8') {
            console.log('Received Message: ' + message.utf8Data);
            connection.sendUTF(message.utf8Data);
        }
        else if (message.type === 'binary') {
            console.log('Received Binary Message of ' + message.binaryData.length + ' bytes');
            connection.sendBytes(message.binaryData);
        }
    });
    connection.on('close', function(reasonCode, description) {
        console.log((new Date()) + ' Peer ' + connection.remoteAddress + ' disconnected.');
    });
});
