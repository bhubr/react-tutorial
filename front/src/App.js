import React from 'react'
import { BrowserRouter, Route, Link, Switch, withRouter } from 'react-router-dom'
import MdJs from './MdJs'

import mdInstructions from './instructions'

class App extends React.Component {
  render() {
    return <BrowserRouter>
      <div>
        <h1>App</h1>
        <Switch>
          <Route exact path='/:app' component={MdJs} />
        </Switch>
      </div>
    </BrowserRouter>
  }
}

export default App
