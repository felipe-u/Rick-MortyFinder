import { useState } from 'react'
import { useCharacterDetails } from '../hooks/useCharacterDetails'
import { CharDetails } from './CharDetails'

export const CharCard = ({ id, imgUrl, name, status }) => {
  const [toggle, setToggle] = useState(false)
  const { charDetails } = useCharacterDetails({ id, toggle })

  const handleToggle = () => {
    setToggle(!toggle)
  }

  return (
    <div className='card-container' onClick={handleToggle}>
      <img src={imgUrl} alt={`${name}'s image`} />
      <div className='card-info-container'>
        <p className='card-info-name'>
          <strong>{name}</strong>
        </p>
        <p>
          <strong>Status: </strong>
          {status}
        </p>
      </div>
      {charDetails && toggle && <CharDetails key={id} data={charDetails} />}
    </div>
  )
}
