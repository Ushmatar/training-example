import * as t from 'io-ts'

export const SET_SEARCH_STRING = '@test/SET_SEARCH_STRING'

export const GREED_REQUEST = '@test/GREED_REQUEST'
export const GREED_SUCCESS = '@test/GREED_SUCCESS'
export const GREED_FAILURE = '@test/GREED_FAILURE'

export type SetSearchString = {
  type: typeof SET_SEARCH_STRING
  searchString: string
}

export const iFOAASResponse = t.interface({
  message: t.string,
  subtitle: t.string
})

export type FOAASResponse = t.TypeOf<typeof iFOAASResponse>

export type GreedRequest = {
  type: typeof GREED_REQUEST
  noun: string
  from: string
}

export type GreedSuccess = {
  type: typeof GREED_SUCCESS
  data: FOAASResponse
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
