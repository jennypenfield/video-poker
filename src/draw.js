function draw (heldCards, hand) {
  let numHeldCards = heldCards.reduce(function (held, totalHeld) {
    return held + totalHeld
  })

  if (numHeldCards === 0) return

  let origHand = []
  for (let i = 0; i < 5; i++) {
    origHand.push(hand[i])
  }
  let cards = [
    '2s', '2d', '2h', '2c', '3s', '3d', '3h', '3c', '4s', '4d', '4h', '4c',
    '5s', '5d', '5h', '5c', '6s', '6d', '6h', '6c', '7s', '7d', '7h', '7c',
    '8s', '8d', '8h', '8c', '9s', '9d', '9h', '9c', '10s', '10d', '10h', '10c',
    'Js', 'Jd', 'Jh', 'Jc', 'Qs', 'Qd', 'Qh', 'Qc', 'Ks', 'Kd', 'Kh', 'Kc',
    'As', 'Ad', 'Ah', 'Ac'
  ]
  // remove cards from the deck from the original hand
  for (let i = 0; i < 5; i++) {
    cards.splice(origHand[i], 1)
  }

  // on the draw, there are now 47 cards in the deck.

  let secondHand = []
  for (let i = 0; i < 5; i++) {
    if (heldCards[i] === 0) {
      secondHand.push(origHand[i])
    } else {
      for (let i = 0; i < (5 - numHeldCards); i++) {
        
      }

    }
  }
  return secondHand
}

export default draw
