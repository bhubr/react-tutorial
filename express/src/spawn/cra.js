const { spawn } = require('child_process')
const path = require('path')
// const { env } = process
const rootDir = path.normalize(`${__dirname}/../../..`)

const spawnCRA = appDir => {
  const options = {
    cwd: `${rootDir}/01-original-app`,
    // cwd: `/Users/bhu/Dev/react-tutorial/01-original-app`,
    // env: { ...env, BROWSER: 'none' },

    // use process.stdout to retain ansi color codes
    stdio: 'inherit'
  }

  spawn('npm', ['start'], options)
  console.log('spawned CRA process')
  return Promise.resolve()
}

module.exports = spawnCRA
