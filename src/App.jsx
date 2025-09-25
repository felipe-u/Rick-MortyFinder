import { useState } from 'react'
import './App.css'
import { CharCard } from './components/CharCard'
import { CharFinder } from './components/CharFinder'
import { useCharacter } from './hooks/useCharacter'

function App() {
  const [query, setQuery] = useState("")
  const { charactersList, isLoading } = useCharacter({ query })
  

  const searchCharacters = (inputValue) => {
    if (!inputValue) return
    setQuery(inputValue)
  }

  return (
    <main>
      <h1>RICK & MORTY FINDER</h1>
      <CharFinder searchCharacters={searchCharacters} />
      {isLoading && <div className="loader"></div>}
      {charactersList?.length > 0 && (
        <section>
          {charactersList.map(({ id, image, name, status }) => {
            return (
              <CharCard
                key={id}
                id={id}
                imgUrl={image}
                name={name}
                status={status}
              />
            )
          })}
        </section>
      )}
      {query && !charactersList && !isLoading && (
        <section className='no-char-found'>No characters found...</section>
      )}
    </main>
  )
}

export default App
