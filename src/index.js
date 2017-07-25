import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { BetOneBtn, DealDrawBtn, HelpBtn, HoldBtns, MaxBetBtn } from './Events.js'
import Bet from './Bet.js'
import Credit from './Credit.js'
import Hand from './Hand.js'
import HeldCardsLabels from './HeldCardsLabels.js'
import PayTable from './PayTable.js'
import Win from './Win.js'

const INITIAL_STATE = {
  bet: 1,
  credit: 100,
  drawNo: 2,
  hand: ['2c', 'As', '3s', 'Jd', '7s'],
  heldCards: [0, 0, 0, 0, 0],
  win: 0
}

window.appState = INITIAL_STATE

function App (state) {
  return (
    <div className='app-container'>
      <div className='pay-table-image-container'>
        {PayTable(state.bet)}
        <img src='images/jack_img.jpeg' className='jack_img' alt='Jack' />
      </div>
      <div className='hold-labels-container'>
        {HeldCardsLabels(state.heldCards)}
      </div>
      <div className='card-container'>
        {Hand(state.hand)}
      </div>
      <div className='button-container'>
        {HoldBtns()}
      </div>
      <div className='win-bet-credit-container'>
        {Win(state.win)}{Bet(state.bet)}{Credit(state.credit)}
      </div>
      <div className='button-container'>
        {HelpBtn()}{BetOneBtn()}{MaxBetBtn()}
        {DealDrawBtn(state.drawNo, state.heldCards, state.hand)}
      </div>
      <h6>designed by <a className='link' href='https://github.com/jennypenfield'>
      jenny penfield</a></h6>
    </div>
  )
}

// ---------------------------------------------------------
// Render Loop
// ---------------------------------------------------------

const rootEl = document.getElementById('root')

function renderNow () {
  ReactDOM.render(App(window.appState), rootEl)
  window.requestAnimationFrame(renderNow)
}

window.requestAnimationFrame(renderNow)
