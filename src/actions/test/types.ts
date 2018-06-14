export const SET_SEARCH_STRING = '@test/SET_SEARCH_STRING'

export type SetSearchString = {
  type: typeof SET_SEARCH_STRING
  searchString: string
}

export type Action = SetSearchString
