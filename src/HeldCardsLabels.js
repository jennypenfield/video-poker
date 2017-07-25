import React from 'react'

function HeldCardsLabels (heldCards) {
  let labels = heldCards.map(function (cardNo, index) {
    if (cardNo === 1) {
      return (
        <div className='held' key={index}>
          HELD
        </div>
      )
    } else {
      return (
        <div className='held' key={index} />
      )
    }
  })
  return labels
}

export default HeldCardsLabels
