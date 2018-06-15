import 'rxjs'
import * as React from 'react'
import { Route, Switch } from 'react-router-dom'
import { HomeView } from 'views/home'
import { FuckOffView } from 'views/fuckOff'

import { ConnectedRouter } from 'connected-react-router'
import { history } from '../store'

export const RootApp = () => {
  return (
    <ConnectedRouter history={history}>
      <div className="app-content">
        <Switch>
          <Route exact path="/fuck-off" component={FuckOffView} />
          <Route exact path="/" component={HomeView} />
        </Switch>
      </div>
    </ConnectedRouter>
  )
}
