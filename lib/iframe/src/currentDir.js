const ee = require('./ee')
const state = {
	currentDir: ''
}

const setCurrentDir = dir => {
	if(state.currentDir !== dir) {
		console.log('dir changed', state.currentDir, '=>', dir)
	}
	state.currentDir = dir
}

const getCurrentDir = () => state.currentDir

module.exports = {
  get: getCurrentDir,
	set: setCurrentDir
}
