const IFRAME_WIDTH = '400px'
const iframeStyles = {
  border: 'none',
  position: 'absolute',
  top: 0,
  bottom: 0,
  right: 0,
  background: 'yellow',
  width: IFRAME_WIDTH,
  height: '100%'
}

document.addEventListener('DOMContentLoaded', () => {
  document.body.style.marginRight = IFRAME_WIDTH
  const iframe = document.createElement('iframe')
  iframe.src = 'http://localhost:8000'
  Object.keys(iframeStyles).forEach(k => {
    iframe.style[k] = iframeStyles[k]
  })
  // iframe.style.border = 'none'
  // iframe.style.position = 'absolute'
  document.body.appendChild(iframe)
})

console.log('connect to webpack dev server', Date.now())
var sock = new SockJS('http://localhost:3000/sockjs-node');
sock.onopen = function() {
    console.log('open');
    sock.send('test');
};

sock.onmessage = function(e) {
    console.log('message', e.data);
    sock.close();
};

sock.onclose = function() {
    console.log('close');
};