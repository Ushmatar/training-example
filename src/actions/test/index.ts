import * as ActionTypes from './types'

export function setSearchString(
  searchString: string
): ActionTypes.SetSearchString {
  return {
    type: ActionTypes.SET_SEARCH_STRING,
    searchString
  }
}

export function greedRequest(
  noun: string,
  from: string
): ActionTypes.GreedRequest {
  return {
    type: ActionTypes.GREED_REQUEST,
    noun,
    from
  }
}

export function greedSuccess(): ActionTypes.GreedSuccess {
  return {
    type: ActionTypes.GREED_SUCCESS
  }
}

export function greedFailure(error: string): ActionTypes.GreedFailure {
  return {
    type: ActionTypes.GREED_FAILURE,
    error
  }
}
