const rootEl = document.querySelector('#root')

rootEl.innerHTML = `
  <button id="test-echo">Test echo</button>
`

const client = new WebSocket('ws://localhost:8000/', 'status-protocol')

client.onopen = () => console.log('open status-protocol')
client.onclose = () => {
  console.log('close status-protocol')
  rootEl.innerHTML = `Server went down. Please <a id="reload" href="#">reload</a>`
  document.querySelector('#reload').onclick = e => {
    e.preventDefault()
    window.location.reload()
  }
}
client.onerror = () => console.log('error status-protocol')
client.onmessage = msg => console.log('message status-protocol', msg)

document.querySelector('#test-echo').onclick = e => {
  client.send('test-echo')
}