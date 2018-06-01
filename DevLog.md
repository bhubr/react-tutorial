# React Tutorial development log

## Checking that CRA's `npm start` is running

1. Spawn `ps aux` and find line ending with `react-scripts start` in output
2. Scan port 3000: [https://www.npmjs.com/package/openport](https://www.npmjs.com/package/openport)

## Writing the server in ES6

Just [follow the guide](https://www.codementor.io/iykyvic/writing-your-nodejs-apps-using-es6-6dh0edw2o). Has to be the simplest and most straigthforward I ever found!

## Detecting open port

1. Module [https://www.npmjs.com/package/openport](https://www.npmjs.com/package/openport) didn't to the job. It can't detect if port is already taken
2. [https://www.npmjs.com/package/detect-port](https://www.npmjs.com/package/detect-port) did the job though.

## The Big Picture

* Server starts
* It setups a WebSocket server
* WS server is meant to communicate with:
  * vanilla JS "iframe client" embedded in `public/index.html` (detect server up/down)
  * test processor called by `react-scripts test`
  * status page