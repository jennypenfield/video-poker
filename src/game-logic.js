import { deepCopy, shuffleArray } from './util.js'

var poker = require('poker-hands')

const MAX_BET = 5

const DECK = [
  '2s', '2d', '2h', '2c', '3s', '3d', '3h', '3c', '4s', '4d', '4h', '4c',
  '5s', '5d', '5h', '5c', '6s', '6d', '6h', '6c', '7s', '7d', '7h', '7c',
  '8s', '8d', '8h', '8c', '9s', '9d', '9h', '9c', '10s', '10d', '10h', '10c',
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

// let testHand = ['2c', 'As', '3s', 'Jd', '7s']
// console.assert(handToString(testHand) === '2C AS 3S JD 7S')

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
  // Update pay table
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
  if (poker.hasPair(strHand)) {
    window.appState.handResult = {winningHand: 'pair', rank: 9}
    return
  }
  return
  // poker.hasPair(strHand)
  // poker.hasTwoPairs(strHand)
    // poker.hasThreeOfAKind(strHand)
    // poker.hasStraight(strHand)
    // poker.hasFlush(strHand)
    // poker.hasFullHouse(strHand)
    // poker.hasFourOfAKind(strHand)
    // poker.hasStraightFlush(strHand)
    // poker.hasRoyalFlush(strHand)
}

export {checkWin, newHand, MAX_BET}
