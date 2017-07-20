import React from 'react'
import deal from './deal.js'
import Help from './Help.js'

function dealBtn () {
  return (
    <button className='game-button' onClick={deal}>DEAL</button>
  )
}

function betOneBtn () {
  return (
    <button className='game-button' onClick={betOne}>BET ONE</button>
  )
}

function betOne () {
  window.appState.bet += 1
}

function helpBtn () {
  return (
    <button className='game-button' onClick={Help}>HELP</button>
  )
}

function holdBtn () {
  return (
    <button className='game-button' onClick={hold}>HOLD</button>
  )
}

function hold () {

}

function maxBetBtn () {
  return (
    <button className='game-button' onClick={betFive}>MAX BET</button>
  )
}

function betFive () {
  window.appState.bet = 5
}

export {
  betOneBtn,
  dealBtn,
  helpBtn,
  holdBtn,
  maxBetBtn
}
