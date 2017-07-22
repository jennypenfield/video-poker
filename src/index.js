import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import deal from './deal.js'
import { BetOneBtn, DealBtn, HelpBtn, HoldBtn1, HoldBtn2,
  HoldBtn3, HoldBtn4, HoldBtn5, MaxBetBtn } from './Events.js'
import Hand from './Hand.js'
import PayTable from './PayTable.js'

const INITIAL_STATE = {
  bet: 1,
  hand: deal(),
  bank: 100,
  draw: 1
}

window.appState = INITIAL_STATE

function App (state) {
  return (
    <div className='app-container'>
      <h1>JACKS OR BETTER</h1>
      <div className='pay-table-image-container'>
        {PayTable()}
        <img src='images/jack_img.jpeg' className='jack_img' alt='Jack' />
      </div>
      <div className='dealt-hand'>
        {Hand(state.hand)}
      </div>
      <div className='button-container'>
        {HoldBtn1()}{HoldBtn2()}{HoldBtn3()}{HoldBtn4()}{HoldBtn5()}
      </div>
      <br />
      <div className='button-container'>
        {HelpBtn()}{BetOneBtn()}{MaxBetBtn()}{DealBtn()}
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
