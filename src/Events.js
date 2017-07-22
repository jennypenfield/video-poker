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

function holdBtn1 () {
  return (
    <button className='hold-button-1' id='holdbtn1' onClick={hold}>HOLD</button>
  )
}

function holdBtn2 () {
  return (
    <button className='game-button' id='holdbtn2' onClick={hold}>HOLD</button>
  )
}

function holdBtn3 () {
  return (
    <button className='game-button' id='holdbtn3' onClick={hold}>HOLD</button>
  )
}

function holdBtn4 () {
  return (
    <button className='game-button' id='holdbtn4' onClick={hold}>HOLD</button>
  )
}

function holdBtn5 () {
  return (
    <button className='game-button' id='holdbtn5' onClick={hold}>HOLD</button>
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
  hold,
  holdBtn1,
  holdBtn2,
  holdBtn3,
  holdBtn4,
  holdBtn5,
  maxBetBtn
}
