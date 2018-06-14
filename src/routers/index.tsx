import 'rxjs'
import * as React from 'react'
import { Route, Switch } from 'react-router-dom'

import * as RRR from 'react-router-redux'
import { history } from '../store'

export const RootApp = () => {
  return (
    <RRR.ConnectedRouter history={history}>
      <div>
        <div className="app-content">
          <Switch>
            <Route exact path="/" component={() => <div>Lul</div>} />
          </Switch>
        </div>
      </div>
    </RRR.ConnectedRouter>
  )
}
