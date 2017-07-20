import React from 'react'

function Hand (hand) {
  let cards = hand.map(function (card, index) {
    let imgSrc = 'images/' + card + '.png'
    console.log(imgSrc)
    return (
      <div className='cards'>
        <img src={imgSrc} key='index' />
      </div>
    )
  })
  return cards
}

export default Hand
