import React from 'react'
import {checkWin, newHand, MAX_BET} from './game-logic'

function clickHelpBtn () {
  window.appState.isHelpShowing = true
}

function HelpBtn () {
  return (
    <button className='game-button' onClick={clickHelpBtn}>Help</button>
  )
}

function clickBetOne () {
  if (window.appState.mode !== 'deal' || window.appState.credit <= 0) return

  if (window.appState.bet === MAX_BET) {
    window.appState.bet = 1
  } else {
    window.appState.bet += 1
  }
  window.appState.isGameOverModalShowing = false
}

function BetOneBtn () {
  return (
    <button className='game-button' onClick={clickBetOne}>Bet One</button>
  )
}

function clickMaxBetBtn () {
  if (window.appState.mode !== 'deal' || window.appState.credit <= 0) return
  window.appState.isGameOverModalShowing = false
  if (window.appState.credit < 5) window.appState.bet = window.appState.credit
  else window.appState.bet = 5
}

function MaxBetBtn () {
  return (
    <button className='game-button' onClick={clickMaxBetBtn}>Max Bet</button>
  )
}

function clickDealBtn () {
  if (window.appState.credit <= 0) return
  window.appState.credit -= window.appState.bet
  window.appState.hand = newHand()
  window.appState.mode = 'draw'
  window.appState.handResult = {winningHand: '', rank: 0}
  window.appState.win = 0
  checkWin(window.appState.hand, window.appState.mode)
}

function DealBtn () {
  return (
    <button className='game-button' onClick={clickDealBtn}>Deal</button>
  )
}

function clickDrawBtn () {
  window.appState.mode = 'deal'
  window.appState.isGameOverModalShowing = true
  checkWin(window.appState.hand, window.appState.mode)
  if (window.appState.handResult.rank !== 0) {
    updateCredit(window.appState.handResult.rank, window.appState.bet)
  }
  if (window.appState.bet > window.appState.credit) window.appState.bet = window.appState.credit
}

function updateCredit (rank, bet) {
  // get current rank & bet index for lookup in the WIN_CREDITS array
  let rankIdx = rank - 1
  let betIdx = bet - 1
  const WIN_CREDITS = [
    [250, 500, 750, 1000, 4000], // royal flush
    [50, 100, 150, 200, 250],    // str flush
    [25, 50, 75, 100, 125],      // four of a KIND
    [9, 18, 27, 36, 45],         // full house
    [6, 12, 18, 24, 30],         // flush
    [4, 8, 12, 16, 20],          // straight
    [3, 6, 9, 12, 15],           // three of a kind
    [2, 4, 6, 8, 10],            // two pair
    [1, 2, 3, 4, 5]              // one pair
  ]
  let winAmt = WIN_CREDITS[rankIdx][betIdx]
  window.appState.win = winAmt
  window.appState.credit += winAmt
}

function DrawBtn () {
  return (
    <button className='game-button' onClick={clickDrawBtn}>Draw</button>
  )
}

function ActionBar (mode) {
  let dealBtn = null
  if (mode === 'deal') dealBtn = DealBtn()

  let drawBtn = null
  if (mode === 'draw') drawBtn = DrawBtn()

  return (
    <div className='button-container'>
      {HelpBtn()}
      {BetOneBtn()}
      {MaxBetBtn()}
      {dealBtn}
      {drawBtn}
    </div>
  )
}

export default ActionBar
