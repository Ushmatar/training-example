import * as TestReducer from 'reducers/test'
import * as ActionTypes from 'actions'

export interface ApplicationState {
  test: TestReducer.State
}

export type AppAction = ActionTypes.AllActions

export type Dispatch = (action: AppAction) => void
