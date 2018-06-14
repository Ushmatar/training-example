import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import * as TestReducer from 'reducers/test'

export default combineReducers({
  test: TestReducer.state,
  router: routerReducer
})
