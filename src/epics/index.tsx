import { combineEpics } from 'redux-observable'
import 'rxjs/add/observable/fromEvent'
import 'rxjs/add/operator/mapTo'
import 'rxjs/add/operator/filter'
import { ActionsObservable } from 'redux-observable'
import * as TestEpics from './fuckOff'
import * as Types from 'types'

export const epics = (
  action$: ActionsObservable<Types.AppAction>,
  store: Types.Store
) => combineEpics(TestEpics.getGreedText)(action$, store)
