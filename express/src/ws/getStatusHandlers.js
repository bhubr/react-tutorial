import ee from '../ee'

export default function(connection) {
  return {
    onAccept: function() {
      ee.on('status:event', data => {
        console.log('[status] event', data)
        connection.sendUTF(data)
      })
    },

    onMessage: function(message) {
      if (message.type === 'utf8') {
        console.log('[status-protocol] Received Message: ' + message.utf8Data)
        // connection.sendUTF(message.utf8Data)
        connection.sendUTF(Object.keys(this.connectionsPerProtocol))
      }
    },

    onClose: function(reasonCode, description) {
      console.log('[status-protocol]', (new Date()) + ' Peer ' + connection.remoteAddress + ' disconnected.')
    }
  }
}