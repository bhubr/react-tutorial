import React from 'react'
import { BrowserRouter, Route, Link, Switch, withRouter } from 'react-router-dom'
import MdJs from './MdJs'

import mdInstructions from './instructions'

class App extends React.Component {
  render() {
    return <BrowserRouter>
      <div>
        <Switch>
          <Route exact path='/:app' component={MdJs} />
        </Switch>
      </div>
    </BrowserRouter>
  }
}

export default App
