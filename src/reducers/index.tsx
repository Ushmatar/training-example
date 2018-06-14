import { combineReducers } from 'redux'
import * as TestReducer from 'reducers/test'
import * as Types from 'types'

export default combineReducers<Types.ApplicationState>({
  test: TestReducer.state
})
