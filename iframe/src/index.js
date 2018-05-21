import { IFRAME_WIDTH, iframe, setSource, setError } from './iframe'
import { connect } from './ws'

document.addEventListener('DOMContentLoaded', () => {
  document.body.style.marginRight = IFRAME_WIDTH
  // iframe.style.border = 'none'
  // iframe.style.position = 'absolute'
  document.body.appendChild(iframe)

  connect()
})

