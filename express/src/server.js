import path from 'path'
import express from 'express'
import { spawnCRA, spawnCRATest, spawnPs } from './spawn'
import indexView from './views/index'
import statusView from './views/status'
import getWsWrapper from './ws'
import { start } from './lib/pollCRA'
// CRA's openBrowser
// import openBrowser from './vendor/openBrowser'

const app = express()
app.use(express.static('public'))
app.use(express.static(path.normalize(`${__dirname}/../..`)))

spawnCRA()
//  .then(() => openBrowser('http://localhost:8000'))
start()

const message = `Lancement de l'app Express: http://localhost:8000`
console.log(message)
const server = app.listen(8000)

// spawnTests()
/* ----------------------------------------------------------------------------------
 | Routes
 * ----------------------------------------------------------------------------------
 |
 */

 // Send status page
app.get('/status', (req, res) => res.send(statusView))

// Send index, whichever URL was requested (apart from the above)
app.get('*', (req, res) => res.send(indexView))

/* ----------------------------------------------------------------------------------
 | WebSockets: https://github.com/theturtle32/WebSocket-Node/blob/master/README.md
 * ----------------------------------------------------------------------------------
 |
 */
const wsWrapper = getWsWrapper(server)
