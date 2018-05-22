import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

import './bootstrap.min.css'

// Compute time to hot reload
const storedTimestamp = localStorage.getItem('ts')
if(storedTimestamp) {
  console.log('Got timestamp', storedTimestamp, Date.now() - Number(storedTimestamp))
}
else {
  console.log('No timestamp yet')
}

const storeTimestamp = () => localStorage.setItem('ts', Date.now())
setInterval(storeTimestamp, 10)


ReactDOM.render(
  <App />,
  document.getElementById('root')
)
