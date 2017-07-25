import React from 'react'
import deal from './deal.js'
import draw from './draw.js'
import Help from './Help.js'

function DealDrawBtn (drawNo, heldCards, hand) {
  if (drawNo === 1) {
    return (
      <button className='game-button' onClick={deal}>DEAL</button>
    )
  } else {
    return (
      <button className='game-button' onClick={draw(heldCards, hand)}>DRAW</button>
    )
  }
}

function BetOneBtn () {
  return (
    <button className='game-button' onClick={betOne}>BET ONE</button>
  )
}

function betOne () {
  window.appState.bet += 1
}

function HelpBtn () {
  return (
    <button className='game-button' onClick={Help}>HELP</button>
  )
}

function HoldBtns () {
  let holdButtons = [1, 2, 3, 4, 5].map(function (index) {
    return (
      <button className='game-button' key={index} id='holdbtn1' onClick={hold}>
        HOLD</button>
    )
  })
  return holdButtons
}

function hold () {

}

function MaxBetBtn () {
  return (
    <button className='game-button' onClick={betFive}>MAX BET</button>
  )
}

function betFive () {
  window.appState.bet = 5
}

export {
  BetOneBtn,
  DealDrawBtn,
  HelpBtn,
  hold,
  HoldBtns,
  MaxBetBtn
}
