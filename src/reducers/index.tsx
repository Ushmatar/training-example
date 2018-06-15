import { combineReducers } from 'redux'
import * as FuckOffReducer from 'reducers/fuckOff'
import * as Types from 'types'

export default combineReducers<Types.StoreState>({
  fuckOff: FuckOffReducer.state
})
