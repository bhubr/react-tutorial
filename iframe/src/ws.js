import { setSource, setError } from './iframe'

const ws = {
  interval: -1,
  client: null
}

const sendNumber = () => {
  if (ws.client && ws.client.readyState === ws.client.OPEN) {
    const number = Math.round(Math.random() * 0xFFFFFF);
    ws.client.send(number.toString());
    setTimeout(sendNumber, 1000);
  }
}

const startPolling = () => {
  if(ws.interval !== -1) {
    console.log('Interval already started', ws.interval)
    // clearInterval(ws.interval)
    return
  }
  ws.interval = setInterval(connect, 5000)
}

const stopPolling = () => {
  if(ws.interval !== -1) {
    clearInterval(ws.interval)
    ws.interval = -1
  }
}

const onopen = () => {
  console.log('WebSocket Client Connected')
  setSource('http://localhost:8000')
  sendNumber()
  stopPolling()
}

const onerror = () => {
  console.log('Connection Error')
  setError('Server not running')
  ws.client = null
  startPolling()
}

const onclose = () => {
  console.log('echo-protocol Client Closed');
  setError('Le serveur Express dans <code>react-app-tdd</code> doit être lancé avec <code>node index.js</code>.')
  ws.client = null
  startPolling()
}

const onmessage = (e) => {
  if (typeof e.data === 'string') {
    console.log("Received: '" + e.data + "'");
  }
}

export const connect = () => {
  const client = ws.client = new WebSocket('ws://localhost:8000/', 'echo-protocol')

  client.onerror = onerror
  client.onopen = onopen
  client.onclose = onclose
  client.onmessage = onmessage
};