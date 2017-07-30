import React from 'react'

function clickCard (idx) {
  // do nothing if the game is not in "draw" mode
  if (window.appState.mode !== 'draw') return

  let isHeld = window.appState.hand[idx].isHeld
  window.appState.hand[idx].isHeld = !isHeld
}

function Card (idx, card, isHeld, drawCard) {
  let heldLabelClass = 'held-label'
  let holdBtnClass = 'hold-btn held'
  if (!isHeld) {
    heldLabelClass = 'held-label hidden'
    holdBtnClass = 'hold-btn'
  }

  let cardToDisplay = ''
  let mode = window.appState.mode
  if (mode === 'deal' && isHeld) cardToDisplay = card
  if (mode === 'deal' && !isHeld) cardToDisplay = drawCard
  if (mode === 'draw') cardToDisplay = card

  let imgSrc = 'images/' + cardToDisplay + '.png'

  const clickFn = clickCard.bind(null, idx)

  return (
    <div className='card' key={idx}>
      <label className={heldLabelClass}>Held</label>
      <img src={imgSrc} alt={card} onClick={clickFn} />
      <button className={holdBtnClass} onClick={clickFn}>Hold</button>
    </div>
  )
}

function Hand (hand) {
  let cards = hand.map(function (card, idx) {
    return Card(idx, card.card, card.isHeld, card.drawCard)
  })

  return (
    <div className='hand-container'>
      {cards}
    </div>
  )
}

export default Hand
