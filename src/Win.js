import React from 'react'

function Win (win) {
  if (win === 0) {
    return (
      <div className='win' />
    )
  } else {
    return (
      <div className='win'>
        WIN {win}
      </div>
    )
  }
}

export default Win
