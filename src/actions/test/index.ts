import * as ActionTypes from './types'

export function setSearchString(
  searchString: string
): ActionTypes.SetSearchString {
  return {
    type: ActionTypes.SET_SEARCH_STRING,
    searchString
  }
}
