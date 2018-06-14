import { createStore, applyMiddleware, compose } from 'redux'
import { routerMiddleware } from 'react-router-redux'
import createHistory from 'history/createBrowserHistory'

export const history = createHistory()

import reducers from 'reducers'

const composeEnhancers: typeof compose =
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

// Middlewares
export const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(routerMiddleware(history)))
)

const handleHot = (hmr: any, store: any) => {
  if (hmr) {
    hmr.accept('../reducers', () => {
      store.replaceReducer(require('../reducers'))
    })
  }
}

export const configureStore = () => {
  handleHot((module as any).hot, store)

  return store
}
