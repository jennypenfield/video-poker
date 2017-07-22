import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import deal from './deal.js'
import { betOneBtn, dealBtn, helpBtn, holdBtn1, holdBtn2,
  holdBtn3, holdBtn4, holdBtn5, maxBetBtn } from './Events.js'
import Hand from './Hand.js'
import renderPayTable from './renderPayTable.js'

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
        {renderPayTable()}
        <img src='images/jack_img.jpeg' className='jack_img' alt='Jack image' />
      </div>
      <div className='dealt-hand'>
        {Hand(state.hand)}
      </div>
      <div>
        {holdBtn1()}{holdBtn2()}{holdBtn3()}{holdBtn4()}{holdBtn5()}
      </div>
      <div>
        {helpBtn()}{betOneBtn()}{maxBetBtn()}{dealBtn()}
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
