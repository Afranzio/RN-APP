import React from 'react'
import GetAPI from './components/getAPI'
import Contents from './components/content'

import {HashRouter as Router, Route, Switch} from 'react-router-dom'

export default function App(){

  const [user, setUser] = React.useState()

  return(
    <div>
        <Router>
            <div className="App" style={{margin: "0px", padding: "0px"}} >
                <Switch>
                    <Route exact path="/">
                      <GetAPI setUserOne={setUser} />
                    </Route>
                    <Route path="/user">
                        <Contents userOne={user} />
                    </Route>
                </Switch>
            </div>
        </Router>
    </div>
  )
}
