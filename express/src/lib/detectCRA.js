import detect from 'detect-port'
const PORT = 3000

const detectCRA = () => detect(PORT)
.then(port => (port === PORT ? false : true))

export default detectCRA