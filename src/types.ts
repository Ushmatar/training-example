import * as FuckOffReducer from 'reducers/fuckOff'
import * as ActionTypes from 'actions'

export type StoreState = {
  fuckOff: FuckOffReducer.State
}

export type AppAction = ActionTypes.AllActions

export type Dispatch = (action: AppAction) => void

export type Store<State = StoreState, Action = ActionTypes.AllActions> = {
  getState: () => State
  dispatch: (action: Action) => void
}
