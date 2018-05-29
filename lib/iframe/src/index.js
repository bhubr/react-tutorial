import { IFRAME_WIDTH, iframe, setSource, setError } from './iframe'
import { connect } from './ws'
import ee from './ee'
import currentDir from './currentDir'

document.addEventListener('DOMContentLoaded', () => {
  document.body.style.marginRight = IFRAME_WIDTH
  document.body.appendChild(iframe)

  ee.on('dir:changed', dir => {
  	if(dir !== currentDir.get()) {
      currentDir.set(dir)
	  	setSource('http://localhost:8000/' + dir)
  	}
  })

  connect()
})
