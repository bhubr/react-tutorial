export const IFRAME_WIDTH = '40%'
const iframeStyles = {
  border: '1px solid #eee',
  position: 'absolute',
  top: 0,
  bottom: 0,
  right: 0,
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
  const html = `<div style="padding:20px"><h1>Too Bad</h1><p>${message}</p><img style="max-width:200px;margin 0 auto;display:block" src="https://bhubr.github.io/img/grumpy-cat.jpg" alt="grumpy cat" /></div>`
  setSource(`data:text/html;charset=UTF-8,${html}`)
}