import { combineEpics } from 'redux-observable'
import 'rxjs/add/observable/fromEvent'
import 'rxjs/add/operator/mapTo'
import 'rxjs/add/operator/filter'
import { ActionsObservable } from 'redux-observable'
import * as TestEpics from './test'
import * as Types from 'types'

export const epic = (
  action$: ActionsObservable<Types.AppAction>,
  store: Types.Store
) => combineEpics(TestEpics.getGreedText)(action$, store)

export default epic
