import { setSource, setError } from './iframe'
import ee from './ee'

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
  setError('Le serveur Express dans <code>react-app-tdd/express</code> doit être lancé avec <code>node server.js</code>.')
  ws.client = null
  startPolling()
}

const onmessage = (e) => {
  let parsed
  if (typeof e.data !== 'string') {
    return
  }
  console.log("Received: '" + e.data + "'");
  try {
    parsed = JSON.parse(e.data) 
  } catch(e) {
    console.log('not json', e)
  }
  if(parsed.type) {
    console.log('parsed', parsed.type, parsed.data)
    ee.emit(parsed.type, parsed.data)
  }
}

export const connect = () => {
  const client = ws.client = new WebSocket('ws://localhost:8000/', 'echo-protocol')

  client.onerror = onerror
  client.onopen = onopen
  client.onclose = onclose
  client.onmessage = onmessage
};