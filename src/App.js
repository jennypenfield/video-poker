import React from 'react'
import { BetOneBtn, DealDrawBtn, HelpBtn, HoldBtns, MaxBetBtn } from './Events'
import Bet from './Bet'
import Credit from './Credit'
import Footer from './Footer'
import Hand from './Hand'
import HeldCardsLabels from './HeldCardsLabels'
import PayTable from './PayTable'
import StateExplorer from './StateExplorer'
import Win from './Win'

function App (state) {
  let stateExplorer = null
  if (state.stateExplorerShowing) {
    stateExplorer = StateExplorer(state)
  }

  return (
    <main>
      <section id='appContainer' className='app-container'>
        {/*
        {MoneyRow()}
        {ActionBar()}
        {Footer()}
      </section> */}
        {PayTable(state.bet)}
        {Hand(state.hand)}
        <div className='win-bet-credit-container'>
          {Win(state.win)}{Bet(state.bet)}{Credit(state.credit)}
        </div>
        <div className='button-container'>
          {HelpBtn()}{BetOneBtn()}{MaxBetBtn()}
          {DealDrawBtn(state.drawNo, state.heldCards, state.hand)}
        </div>
        {Footer()}
      </section>
      <section id='explorerContainer'>{stateExplorer}</section>
    </main>
  )
}

export default App
