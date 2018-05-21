export const IFRAME_WIDTH = '400px'
const iframeStyles = {
  border: 'none',
  position: 'absolute',
  top: 0,
  bottom: 0,
  right: 0,
  background: 'yellow',
  width: IFRAME_WIDTH,
  height: '100%'
}

export const iframe = document.createElement('iframe')
// iframe.src = 'http://localhost:8000'
// iframe.src = 'http://course.jsx.fr/courses/react/plusieurs-composants'
Object.keys(iframeStyles).forEach(k => {
  iframe.style[k] = iframeStyles[k]
})

export const setSource = src => iframe.src = src

export const setError = message => {
  const html = `<h1>Too Bad</h1><p>${message}</p><img style="max-width:200px;margin 0 auto" src="https://bhubr.github.io/img/grumpy-cat.jpg" alt="grumpy cat" />`
  setSource(`data:text/html;charset=UTF-8,${html}`)
}