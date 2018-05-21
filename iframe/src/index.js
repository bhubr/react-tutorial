import { IFRAME_WIDTH, iframe, setSource, setError } from './iframe'


document.addEventListener('DOMContentLoaded', () => {
  document.body.style.marginRight = IFRAME_WIDTH
  // iframe.style.border = 'none'
  // iframe.style.position = 'absolute'
  document.body.appendChild(iframe)
})



var client = new WebSocket('ws://localhost:8000/', 'echo-protocol');

client.onerror = function() {
  // console.log('Connection Error');
  setError('Server not running')
};

client.onopen = function() {
  console.log('WebSocket Client Connected');

  function sendNumber() {
      if (client.readyState === client.OPEN) {
          var number = Math.round(Math.random() * 0xFFFFFF);
          client.send(number.toString());
          setTimeout(sendNumber, 1000);
      }
  }
  sendNumber();
};

client.onclose = function() {
  // console.log('echo-protocol Client Closed');
  setError('Server connection lost')
};

client.onmessage = function(e) {
  if (typeof e.data === 'string') {
      console.log("Received: '" + e.data + "'");
  }
};