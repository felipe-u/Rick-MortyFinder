import {
  ENDPOINT_GET_CHARACTER_LIST,
  ENDPOINT_GET_SINGLE_CHARACTER,
} from '../util/constants'

export const getCharacters = async (query) => {
  const res = await fetch(`${ENDPOINT_GET_CHARACTER_LIST}${query}`)
  if (!res.ok) return []
  const data = await res.json()
  const { results } = data
  return results || []
}

export const getCharater = async (id) => {
  const res = await fetch(`${ENDPOINT_GET_SINGLE_CHARACTER}${id}`)
  const data = await res.json()
  return data
}
