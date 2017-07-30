import { deepCopy, shuffleArray } from './util.js'

var poker = require('poker-hands')

const MAX_BET = 5

const DECK = [
  '2s', '2d', '2h', '2c', '3s', '3d', '3h', '3c', '4s', '4d', '4h', '4c',
  '5s', '5d', '5h', '5c', '6s', '6d', '6h', '6c', '7s', '7d', '7h', '7c',
  '8s', '8d', '8h', '8c', '9s', '9d', '9h', '9c', 'Ts', 'Td', 'Th', 'Tc',
  'Js', 'Jd', 'Jh', 'Jc', 'Qs', 'Qd', 'Qh', 'Qc', 'Ks', 'Kd', 'Kh', 'Kc',
  'As', 'Ad', 'Ah', 'Ac'
]

// returns a freshly shuffled new deck of cards
function newDeck () {
  return shuffleArray(deepCopy(DECK))
}

// returns a new hand
function newHand () {
  let deck = newDeck()

  let hand = []
  for (let i = 0; i < 5; i++) {
    hand.push({card: deck[i], isHeld: false, drawCard: deck[i + 10]})
  }
  return hand
}

function handToString (checkHand) {
  let cards = checkHand.map(function (card) { return card.toUpperCase() })
  return cards.join(' ')
}

function checkWin (hand, mode) {
  let checkHand = []
  for (let i = 0; i < 5; i++) {
    if (mode === 'draw') {
      checkHand.push(hand[i].card)
    }
    if (mode === 'deal') {
      if (hand[i].isHeld) {
        checkHand.push(hand[i].card)
      } else {
        checkHand.push(hand[i].drawCard)
      }
    }
  }

  let strHand = handToString(checkHand)

  if (poker.hasRoyalFlush(strHand)) {
    window.appState.handResult = {winningHand: 'royalFlush', rank: 1}
    return
  }
  if (poker.hasStraightFlush(strHand)) {
    window.appState.handResult = {winningHand: 'straightFlush', rank: 2}
    return
  }
  if (poker.hasFourOfAKind(strHand)) {
    window.appState.handResult = {winningHand: 'fourOfAKind', rank: 3}
    return
  }
  if (poker.hasFullHouse(strHand)) {
    window.appState.handResult = {winningHand: 'fullHouse', rank: 4}
    return
  }
  if (poker.hasFlush(strHand)) {
    window.appState.handResult = {winningHand: 'flush', rank: 5}
    return
  }
  if (poker.hasStraight(strHand)) {
    window.appState.handResult = {winningHand: 'straight', rank: 6}
    return
  }
  if (poker.hasThreeOfAKind(strHand)) {
    window.appState.handResult = {winningHand: 'threeOfAKind', rank: 7}
    return
  }
  if (poker.hasTwoPairs(strHand)) {
    window.appState.handResult = {winningHand: 'twoPair', rank: 8}
    return
  }
  if (hasPair(checkHand)) { // library can only check for any pair--need to check for Js or better.
    window.appState.handResult = {winningHand: 'jacksOrBetter', rank: 9}
    return
  }
  return
}

function hasPair (hand) {
  let cardArray = hand.map(function (card) { return card.substring(0, 1) })
  // push J, Q, K, A into new array
  let highCardsArray = []
  for (let i = 0; i < 5; i++) {
    if (cardArray[i] === 'J' || cardArray[i] === 'Q' || cardArray[i] === 'K' ||
    cardArray[i] === 'A') {
      highCardsArray.push(cardArray[i])
    }
  }
  // alphabetize remaining cards
  let alphaCards = highCardsArray.sort()
  console.log('alphaCards: ' + alphaCards)

  // compare sorted high cards to see if there is a pair of Js or better
  for (let i = 1; i < alphaCards.length; i++) {
    if (alphaCards[i] === alphaCards[i - 1]) {
      return true
    }
  }
  return false
}

export {checkWin, newHand, MAX_BET}
