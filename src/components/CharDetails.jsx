export const CharDetails = ({ data }) => {
  return (
    <>
      <div className='char-modal-background'>
        <div className='char-modal'>
          <h2>{data.name}</h2>
          <div className='char-modal-container'>
            <img src={data.image} alt={`${data.name}'s image`} />
            <div className='char-modal-info'>
              <p>
                <strong>Status: </strong>
                {data.status}
              </p>
              <p>
                <strong>Species: </strong>
                {data.species}
              </p>
              <p>
                <strong>Gender: </strong>
                {data.gender}
              </p>
              <p>
                <strong>Location: </strong>
                {data.location.name}
              </p>
              <p>
                <strong>Episodes: </strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
