// my-custom-processor.js
// const ansiRegex = require('ansi-regex')
const Convert = require('ansi-to-html')
const convert = new Convert()

/**
 * Usage as MyCustomProcessor
 * @param {Object} res Jest test result data
 */
const MyCustomProcessor = (res) => {

  console.log('MyCustomProcessor', res)
  const { testResults } = res

  //////
  const testResult = testResults[0]
  if(testResult.failureMessage) {
      const { failureMessage } = testResult
    const html = convert.toHtml(failureMessage)
    console.log(html)
    //   console.log('has failure message', failureMessage.match(ansiRegex()),
    // failureMessage.replace(ansiRegex(), 'x'))

    // const matches = failureMessage.match(ansiRegex())
    // const uniqueMatches = matches.reduce((c, item) => c.includes(item) ? c : c.concat(item), [])
    // console.log(failureMessage.includes( uniqueMatches ))
  }

  //////


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
