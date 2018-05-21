import { IFRAME_WIDTH, iframe, setSource, setError } from './iframe'
import { connect } from './ws'
import ee from './ee'

document.addEventListener('DOMContentLoaded', () => {
	let currentDir
  document.body.style.marginRight = IFRAME_WIDTH
  // iframe.style.border = 'none'
  // iframe.style.position = 'absolute'
  document.body.appendChild(iframe)

  ee.on('dir:changed', dir => {
  	console.log('react to dir change', dir)
  	if(dir !== currentDir) {
      currentDir = dir
	  	setSource('http://localhost:8000/' + dir)	
  	}
  })

  connect()
})

