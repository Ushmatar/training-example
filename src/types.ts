import * as TestReducer from 'reducers/test'
import * as ActionTypes from 'actions'
import { store } from 'store'

export interface ApplicationState {
  test: TestReducer.State
}

export type AppAction = ActionTypes.AllActions

export type Dispatch = (action: AppAction) => void

export type Store = typeof store
