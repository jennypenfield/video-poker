import React from 'react'
import {MAX_BET} from './game-logic'

function clickHelpBtn () {
  window.appState.isHelpShowing = true
}

function HelpBtn () {
  return (
    <button className='game-button' onClick={clickHelpBtn}>Help</button>
  )
}

function clickBetOne () {
  if (window.appState.mode !== 'deal') return

  if (window.appState.bet === MAX_BET) {
    window.appState.bet = 1
  } else {
    window.appState.bet += 1
  }
}

function BetOneBtn () {
  return (
    <button className='game-button' onClick={clickBetOne}>Bet One</button>
  )
}

function clickMaxBetBtn () {
  if (window.appState.mode === 'deal') {
    window.appState.bet = 5
  }
}

function MaxBetBtn () {
  return (
    <button className='game-button' onClick={clickMaxBetBtn}>Max Bet</button>
  )
}

function clickDealBtn () {
  // TODO:
  // - creates the hand
  // - spends the money
  // - switch to "draw" mode
  window.appState.mode = 'draw'
}

function DealBtn () {
  return (
    <button className='game-button' onClick={clickDealBtn}>Deal</button>
  )
}

function clickDrawBtn () {
  // TODO:
  // - deal out new cards for the ones that were not held
  // - calculate the resultant hand
  // - update the pay with the result of the hand
  // - highlight the winning row in the pay table
  // - switch to "deal" mode
  window.appState.mode = 'deal'
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
