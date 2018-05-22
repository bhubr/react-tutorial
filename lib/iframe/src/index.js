import { IFRAME_WIDTH, iframe, setSource, setError } from './iframe'
import { connect } from './ws'
import ee from './ee'
import currentDir from './currentDir'

document.addEventListener('DOMContentLoaded', () => {
  document.body.style.marginRight = IFRAME_WIDTH
  // iframe.style.border = 'none'
  // iframe.style.position = 'absolute'
  document.body.appendChild(iframe)

  ee.on('dir:changed', dir => {
  	if(dir !== currentDir.get()) {
      console.log('react to dir change', dir)
      currentDir.set(dir)
	  	setSource('http://localhost:8000/' + dir)
  	}
  })

  connect()
})
