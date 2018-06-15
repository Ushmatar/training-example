import { createStore, applyMiddleware, compose } from 'redux'
import { connectRouter, routerMiddleware } from 'connected-react-router'
import createHistory from 'history/createBrowserHistory'
import { createEpicMiddleware } from 'redux-observable'

import reducers from 'reducers'
import { epics } from 'epics'
import { create } from 'domain'

export const history = createHistory()

export const composeEnhancers: typeof compose =
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const store = createStore(
  connectRouter(history)(reducers), // new root reducer with router state
  {},
  composeEnhancers(
    applyMiddleware(
      routerMiddleware(history), // for dispatching history actions
      // ... other middlewares ...
      createEpicMiddleware(epics)
    )
  )
)

export const handleHot = (hmr: any, store: any) => {
  if (hmr) {
    hmr.accept('reducers', () => {
      store.replaceReducer(require('reducers'))
    })
  }
}

export const configureStore = () => {
  handleHot((module as any).hot, store)

  return store
}
