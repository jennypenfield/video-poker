import React from 'react'
import {hold} from './Events.js'

function Hand (hand) {
  let onclick = null
  if (window.appState.draw === 1) onclick = hold
  let cards = hand.map(function (card, index) {
    let imgSrc = 'images/' + card + '.png'
    return (
      <img className='cards' onClick={onclick} src={imgSrc} key={index} alt={card} />
    )
  })
  return cards
}

export default Hand
