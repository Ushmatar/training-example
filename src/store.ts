import { createStore, applyMiddleware, compose } from 'redux'
import { createEpicMiddleware } from 'redux-observable'
import { routerMiddleware } from 'react-router-redux'
import createHistory from 'history/createBrowserHistory'

export const history = createHistory()

// Combined epics and reducers
import epics from 'epics'
import reducers from 'reducers'

const composeEnhancers =
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

// Middlewares
const finalCreateStore = composeEnhancers(
  applyMiddleware(createEpicMiddleware(epics)),
  applyMiddleware(routerMiddleware(history))
)(createStore)

const handleHot = (hmr: any, store: any) => {
  if (hmr) {
    hmr.accept('../reducers', () => {
      store.replaceReducer(require('../reducers'))
    })
  }
}

export const configureStore = () => {
  const initialState = {}
  const store = finalCreateStore(reducers, initialState)

  handleHot((module as any).hot, store)

  return store
}
