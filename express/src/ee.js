import { EventEmitter2 } from 'eventemitter2'
const ee = new EventEmitter2({ wildcard: true })
// ee.on('cra:status:changed', s => console.log(s))
ee.onAny((event, value) => {
  console.log('onAny', event, value)
  if(event === 'status:event') {
    return
  }
  ee.emit('status:event', JSON.stringify({ event, value }))
})
module.exports = ee