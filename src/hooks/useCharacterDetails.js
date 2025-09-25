import { useEffect, useState } from 'react'
import { getCharater } from '../services/characters'

export function useCharacterDetails({ id, toggle }) {
  const [charDetails, setCharDetails] = useState()

  useEffect(() => {
    if (!id) return
    if (!toggle) return
    getCharater(id).then(setCharDetails)
  }, [id, toggle])

  return { charDetails }
}
