const { spawn } = require('child_process')
const path = require('path')
const fs = require('fs')
const currentDir = require('./currentDir')

const rootDir = path.normalize(`${__dirname}/..`)
const appNameRegex = /\d+[-a-z]+/
const dirs = fs.readdirSync('..')
.filter(dir => appNameRegex.exec(dir))

const spawnPs = () => {
  // const child = spawn('npm', ['start'], { cwd: 'server' });
  const child = spawn('ps', ['aux']);
  let stdout = ''

  child.stdout.on('data', (data) => {
    stdout += data.toString()
    // .filter(l => /\d+[-a-z]+\/node_modules/.exec(l))
    // .map(l => l.substr(l.indexOf(rootDir) + rootDir.length + 1).split('/')[0])
    // console.log('\n\n\n######lines')
    // console.log(data.toString(), lines)
  });

  child.stderr.on('data', (data) => {
    console.log(`stderr: ${data}`);
  });

  child.on('close', (code) => {
    const line = stdout.split('\n')
    .find(l => /\d+[-a-z]+\/node_modules/.exec(l) && l.endsWith('react-scripts start'))
    if(! line) {
      // console.log('no matching process !!!')
      return
    }
    // console.log('## ps line', line)
    const matches = line.match(/\d+[-a-z]+/)
    if(matches && dirs.includes(matches[0])) {
      // console.log('match', matches[0])
      currentDir.set(matches[0])
    }
  });

}

module.exports = spawnPs
