export const SET_SEARCH_STRING = '@test/SET_SEARCH_STRING'

export const GREED_REQUEST = '@test/GREED_REQUEST'
export const GREED_SUCCESS = '@test/GREED_SUCCESS'
export const GREED_FAILURE = '@test/GREED_FAILURE'

export type SetSearchString = {
  type: typeof SET_SEARCH_STRING
  searchString: string
}

export type GreedRequest = {
  type: typeof GREED_REQUEST
  noun: string
  from: string
}

export type GreedSuccess = {
  type: typeof GREED_SUCCESS
}

export type GreedFailure = {
  type: typeof GREED_FAILURE
  error: string
}

export type Action =
  | SetSearchString
  | GreedRequest
  | GreedSuccess
  | GreedFailure
