/*

Spawns npm test from server

Things tried (leftovers of code left intentionally):
- starting spawn('npm', ['test'], options)
  => NOT ok, since it didn't launch tests with the custom processor
  => REPLACED with launching react-scripts.js with args:
      ['test', '--env=jsdom', '--testResultsProcessor', './test-processor']

- using 'inherit' to use standard stdios
  => NOT ok, better use the custom test processor to get console output !

- using { CI: 'true' } in options
  => NOT ok, test takes time to start, better start them in (default) watch mode

- but since we still need to restart tests when app is changed, we need to kill
  the test process if necessary...
  * child.stdin.write('q') => NOT ok
  * child.stdin.pause(); child.kill() => NOT ok
  * kill = require('tree-kill'); kill(child.pid) => OK!!!

- in test-processor.js
  * get testResults[0].failureMessage if test fails
    (i.e. testResults[0].failureMessage !== undef)
  * try matching failureMessage with ansi-regex => NOT ok
    since it was hard to replace ansi strings (had to make a regex of my own...)
  * ansi-to-html => OK!!!

*/

const { spawn } = require('child_process')
const path = require('path')
const { env } = process
const rootDir = path.normalize(`${__dirname}/../../..`)
const kill = require('tree-kill')

const spawnTests = () => {

  const options = {
    // args: ['--colors'],
    cwd: `${rootDir}/01-original-app`
    // cwd: `/Users/bhu/Dev/react-tutorial/01-original-app`,
    // shell: true,
    // env: { ...env, CI: 'true' },

    // use process.stdout to retain ansi color codes
    // stdio:  ['pipe', 'inherit', 'inherit']  // 'inherit' // [process.stdin, process.stdout, 'pipe']
  }
  const child = spawn('./node_modules/react-scripts/bin/react-scripts.js', ['test', '--env=jsdom', '--testResultsProcessor', './test-processor'], options)
  let stdout = ''

  setTimeout(() => {
    console.log('write to child stdin')
    kill(child.pid)
  }, 12000)

  child.stdout.on('data', (data) => {
    console.log(data)
  })

  // child.stderr.on('data', (data) => {
  //   console.log(`stderr: ${data}`);
  // });

  child.on('close', (code) => {
    console.log('CLOSED spawnTests')
  })
}

module.exports = spawnTests
