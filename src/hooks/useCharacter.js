import { useEffect, useState } from 'react'
import { getCharacters } from '../services/characters'

export function useCharacter({ query }) {
  const [charactersList, setCharactersList] = useState()
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    if (!query) return
    setIsLoading(true)
    getCharacters(query)
      .then(setCharactersList)
      .finally(() => setIsLoading(false))
  }, [query])

  return { charactersList, isLoading }
}
