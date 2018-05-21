const ee = require('./ee')
const state = {
	currentDir: ''
}

const setCurrentDir = dir => {
	// if(state.currentDir === dir) {
	// 	return
	// }
	console.log('dir:changed', state.currentDir, '=>', dir)
	state.currentDir = dir
	ee.emit('message', JSON.stringify({
		type: 'dir:changed',
		data: dir
	}))
}

module.exports = {
	set: setCurrentDir
}