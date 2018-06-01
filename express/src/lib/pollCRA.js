import detectCRA from './detectCRA'
import { spawnPs } from '../spawn'
import ee from '../ee'

let isRunning
let cra

const updateStatus = _isRunning => {
  const didChange = isRunning !== _isRunning
  isRunning = _isRunning
  if (didChange) {
    if (! isRunning) {
      ee.emit('cra:status:changed', '')
      return
    }
    spawnPs()
      .then(_cra => {
        if (! _cra) {
          cra = ''
          throw new Error(`Process running is not CRA`)
        }
        cra = _cra
        ee.emit('cra:status:changed', cra)
      })
  }
}

export const getStatus = () => ({ isRunning, cra })

export const start = () => setInterval(() => {
  detectCRA()
    .then(updateStatus)
    .catch(console.error)
}, 500)