import * as t from 'io-ts'
import * as fp from 'fp-ts'
import * as R from 'ramda'
import { Observable, AjaxResponse } from 'rxjs'
import 'rxjs'
import { ajax } from 'rxjs/observable/dom/ajax'
import * as Types from 'types'
import { ActionsObservable } from 'redux-observable'
import * as ActionTypes from 'actions/fuckOff/types'
import * as Actions from 'actions/fuckOff'

// https://www.foaas.com/ <- its a very useful service

export function getGreedText(
  action$: ActionsObservable<Types.AppAction>,
  store: Types.Store
): Observable<ActionTypes.Action> {
  return (action$.ofType(ActionTypes.GREED_REQUEST) as Observable<
    ActionTypes.GreedRequest
  >)
    .debounceTime(500)
    .mergeMap(request =>
      ajax({
        headers: {
          Accept: 'application/json'
        },
        method: 'GET',
        crossDomain: true,
        url: `https://www.foaas.com/greed/${request.noun}/${request.from}`
      })
        .flatMap(({ response }: AjaxResponse) => {
          const validation = t.validate(response, ActionTypes.iFOAASResponse)
          const action: ActionTypes.Action = validation.fold<
            ActionTypes.Action
          >(
            e => Actions.greedFailure('Error'),
            data => Actions.greedSuccess(data)
          )
          return Observable.of(action)
        })
        .catch(e => {
          return Observable.of(Actions.greedFailure('An error occured'))
        })
    )
}
