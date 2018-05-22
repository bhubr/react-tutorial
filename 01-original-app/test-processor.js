// my-custom-processor.js



/**
 * Usage as MyCustomProcessor
 * @param {Object} res Jest test result data
 */
const MyCustomProcessor = (res) => {

  // console.log('MyCustomProcessor', res)
  const { testResults } = res


  var WebSocketClient = require('websocket').client;

  var client = new WebSocketClient();

  client.on('connectFailed', function(error) {
      console.log('Connect Error: ' + error.toString());
  });

  client.on('connect', function(connection) {
      console.log('WebSocket Client Connected');
      connection.on('error', function(error) {
          console.log("Connection Error: " + error.toString());
      });
      connection.on('close', function() {
          console.log('echo-protocol Connection Closed');
      });
      // connection.on('message', function(message) {
      //     if (message.type === 'utf8') {
      //         console.log("Received: '" + message.utf8Data + "'");
      //     }
      // });

      function sendNumber() {
          if (connection.connected) {
              var number = Math.round(Math.random() * 0xFFFFFF);
              connection.sendUTF(JSON.stringify(testResults));
              // setTimeout(sendNumber, 1000);
          }
      }
      sendNumber();
  });

  client.connect('ws://localhost:8000/', 'echo-protocol');


	return res;
};

module.exports = MyCustomProcessor;
