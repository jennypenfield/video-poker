import React from 'react'
import {hold} from './Events.js'

function Hand (hand) {
  let cards = hand.map(function (card, index) {
    let imgSrc = 'images/' + card + '.png'
    return (
      <div className='cards'>
        <img className='cards' onClick={hold} src={imgSrc} key='index' alt='cardimage' />
      </div>
    )
  })
  return cards
}

export default Hand
