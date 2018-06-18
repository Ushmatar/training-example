import { Lens } from 'monocle-ts'
import * as ActionTypes from 'actions/fuckOff/types'
import { TypeOf } from 'io-ts'
import { Failure } from 'fp-ts/lib/Validation'

export const STANDBY = 'STANDBY'
export const FETCHING = 'FETCHING'
export const FETCHED = 'FETCHED'
export const ERROR = 'ERROR'

export type GreedDataStatus =
  | {
      status: typeof STANDBY | typeof FETCHING
    }
  | {
      status: typeof FETCHED
      data: ActionTypes.FOAASResponse
    }
  | {
      status: typeof ERROR
      error: string
    }

export type State = {
  searchString: string
  status: GreedDataStatus
}

export const initialState: State = {
  searchString: '',
  status: { status: STANDBY }
}
const status = Lens.fromProp<State, 'status'>('status')
const searchString = Lens.fromProp<State, 'searchString'>('searchString')

export const state = (
  state: State = initialState,
  action: ActionTypes.Action
) => {
  switch (action.type) {
    case ActionTypes.SET_SEARCH_STRING:
      return searchString.set(action.searchString)(state)
    case ActionTypes.GREED_REQUEST:
      return status.set({ status: FETCHING })(state)
    case ActionTypes.GREED_FAILURE:
      return status.set({ status: ERROR, error: action.error })(state)
    case ActionTypes.GREED_SUCCESS:
      return status.set({ status: FETCHED, data: action.data })(state)
    default:
      return state
  }
}
