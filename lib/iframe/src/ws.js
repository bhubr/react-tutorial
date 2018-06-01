import { getSource, setSource, setError } from './iframe'
import ee from './ee'
import currentDir from './currentDir'

const ERROR_MSG = 'Le serveur Express dans <code>react-tutorial/express</code> doit être lancé avec <code>node server.js</code>.'
const ws = {
  interval: -1,
  client: null
}

const sendNumber = () => {
  if (ws.client && ws.client.readyState === ws.client.OPEN) {
    const number = Math.round(Math.random() * 0xFFFFFF);
    // ws.client.send(number.toString());
    // setTimeout(sendNumber, 1000);
  }
}

const startPolling = () => {
  if(ws.interval !== -1) {
    return
  }
  ws.interval = setInterval(connect, 1000)
}

const stopPolling = () => {
  if(ws.interval !== -1) {
    clearInterval(ws.interval)
    ws.interval = -1
  }
}

const onopen = () => {
  stopPolling()
}

const onerror = () => {
  console.log('### echo-protocol Connection Error')
  setError(ERROR_MSG)
  ws.client = null
  startPolling()
}

const onclose = () => {
  console.log('### echo-protocol Client Closed');
  setError(ERROR_MSG)
  currentDir.set('')
  ws.client = null
  startPolling()
}

const onmessage = (e) => {
  console.log('received message', e)
  let parsed
  if (typeof e.data !== 'string') {
    return
  }
  try {
    parsed = JSON.parse(e.data)
  } catch(e) {
    console.log('not json', e.data)
  }
  if(parsed && parsed.type) {
    ee.emit(parsed.type, parsed.data)
  }
}

export const connect = () => {
  if(ws.client === null) {
    console.log('### connect')
    ws.client = new WebSocket('ws://localhost:8000/', 'echo-protocol')
  }

  const client = ws.client
  client.onerror = onerror
  client.onopen = onopen
  client.onclose = onclose
  client.onmessage = onmessage
};
