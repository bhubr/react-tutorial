import { server as WebSocketServer } from 'websocket'
import ee from '../ee'

import getHandlers from './getHandlers'
console.log(getHandlers)

const originIsAllowed = origin => true

class WsWrapper {
  constructor(httpServer) {
    this.wsServer = new WebSocketServer({
      httpServer,
      autoAcceptConnections: false
    })
    this.wsServer.on('request', this.onRequest.bind(this))
    this.connectionsPerProtocol = {}
  }

  onRequest(request) {
    if (!originIsAllowed(request.origin)) {
      request.reject()
      console.log((new Date()) + ' Connection from origin ' + request.origin + ' rejected.')
      return
    }

    const [protocol] = request.requestedProtocols
    const connection = request.accept(protocol, request.origin)
    const matches = protocol.match(/(.*)\-protocol/)
    if(! matches || ! matches[1]) {
      throw new Error(`${protocol} doesn't match *-protocol`)
    }
    const protocolName = matches[1]
    this.connectionsPerProtocol[protocol] = connection
    const handlers = getHandlers[protocolName](connection)
    console.log(protocol, protocolName, (new Date()) + ' Connection accepted.')
    if(typeof handlers.onAccept !== 'undefined') {
      handlers.onAccept.call(this)
    }



    connection.on('message', handlers.onMessage.bind(this))
    connection.on('close', () => {
      console.log('closing connection for protocol', protocol)
      delete this.connectionsPerProtocol[protocol]
      handlers.onClose.call(this)
    })
  }

}

export default function(httpServer) {
  return new WsWrapper(httpServer)
}
