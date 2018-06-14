import { combineReducers } from 'redux'
import * as TestReducer from 'reducers/test'

export default combineReducers({
  test: TestReducer.state
})
