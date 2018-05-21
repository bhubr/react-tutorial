const express = require('express')
const app = express()
const spawnPs = require('./spawnPs')
app.use(express.static('public'))

setInterval(spawnPs, 1000)

/**
 * Pour pouvoir répondre aux requêtes, l'application
 * doit d'abord ECOUTER sur un "port" (un canal de communication)
 */
const message = `Lancement de l'app Express: http://localhost:8000`
console.log(message)
app.listen(8000)

