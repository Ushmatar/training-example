import { Lens } from 'monocle-ts'
import * as ActionTypes from 'actions/test/types'

export type State = {
  searchString: string
}

export const initialState: State = {
  searchString: ''
}

const searchString = Lens.fromProp<State, 'searchString'>('searchString')

export const state = (
  state: State = initialState,
  action: ActionTypes.Action
) => {
  switch (action.type) {
    case ActionTypes.SET_SEARCH_STRING:
      return searchString.set(action.searchString)(state)

    default:
      return state
  }
}
