import React from 'react'
import ActionBar from './ActionBar'
import Bet from './Bet'
import Credit from './Credit'
import Footer from './Footer'
import Hand from './Hand'
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
        {PayTable(state.bet)}
        {Hand(state.hand)}
        <div className='win-bet-credit-container'>
          {Win(state.win)}{Bet(state.bet)}{Credit(state.credit)}
        </div>
        {ActionBar(state.mode)}
        {Footer()}
      </section>
      <section id='explorerContainer'>{stateExplorer}</section>
    </main>
  )
}

export default App
