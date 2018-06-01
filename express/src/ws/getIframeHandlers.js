import ee from '../ee'
import { getStatus } from '../lib/pollCRA'

export default function(connection) {
  return {
    onAccept: function() {
      ee.on('cra:status:changed', msg => {
        console.log('[echo-protocol] CRA status changed', msg)
        connection.sendUTF(JSON.stringify({
          type: 'cra:status:changed', data: msg
        }))
      })
      connection.sendUTF(JSON.stringify({
        type: 'cra:status:changed', data: getStatus().cra
      }))
    },

    onMessage: function(message) {
      if (message.type === 'utf8') {
        console.log('[echo-protocol] Received Message: ' + message.utf8Data)
        connection.sendUTF(message.utf8Data)
      }
    },

    onClose: function(reasonCode, description) {
      console.log('[echo-protocol]', (new Date()) + ' Peer ' + connection.remoteAddress + ' disconnected.')
    }
  }
}