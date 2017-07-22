import React from 'react'
import deal from './deal.js'
import Help from './Help.js'

function DealBtn () {
  return (
    <button className='game-button' onClick={deal}>DEAL</button>
  )
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
    <button className='game-button' onClick={Help}>PAYS HELP</button>
  )
}

function HoldBtn (idx) {

}

function HoldBtn1 () {
  return (
    <button className='game-button' id='holdbtn1' onClick={hold}>HOLD</button>
  )
}

function HoldBtn2 () {
  return (
    <button className='game-button' id='holdbtn2' onClick={hold}>HOLD</button>
  )
}

function HoldBtn3 () {
  return (
    <button className='game-button' id='holdbtn3' onClick={hold}>HOLD</button>
  )
}

function HoldBtn4 () {
  return (
    <button className='game-button' id='holdbtn4' onClick={hold}>HOLD</button>
  )
}

function HoldBtn5 () {
  return (
    <button className='game-button' id='holdbtn5' onClick={hold}>HOLD</button>
  )
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
  DealBtn,
  HelpBtn,
  hold,
  HoldBtn1,
  HoldBtn2,
  HoldBtn3,
  HoldBtn4,
  HoldBtn5,
  MaxBetBtn
}
