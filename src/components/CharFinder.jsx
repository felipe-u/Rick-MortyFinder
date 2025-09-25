import { useState } from 'react'

export const CharFinder = ({ searchCharacters }) => {
  const [inputValue, setInputValue] = useState()

  const handleInputValue = () => {
    searchCharacters(inputValue)
  }

  return (
    <div className='input-container'>
      <input
        type='text'
        placeholder='Find any character by his name'
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={handleInputValue}>Search</button>
    </div>
  )
}
