import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import deal from './deal.js'
import { betOneBtn, dealBtn, holdBtn, maxBetBtn } from './Events.js'
import Hand from './Hand.js'

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
      <div className='pay-table' />
      <div className='dealt-hand'>
        {Hand(state.hand)}
      </div>
      {betOneBtn()}{holdBtn()}{holdBtn()}{holdBtn()}{holdBtn()}{holdBtn()}
      {maxBetBtn()}{dealBtn()}
      <h6>designed by <a className='link' href='https://github.com/jennypenfield'>
      jenny penfield</a></h6>
    </div>
  )
}

console.log(window.localStorage.state)
console.log(window.appState.board)

// ---------------------------------------------------------
// Render Loop
// ---------------------------------------------------------

const rootEl = document.getElementById('root')

function renderNow () {
  ReactDOM.render(App(window.appState), rootEl)
  window.requestAnimationFrame(renderNow)
}

window.requestAnimationFrame(renderNow)
