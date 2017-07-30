import React from 'react'
import ActionBar from './ActionBar'
import Footer from './Footer'
import Hand from './Hand'
import MoneyBar from './MoneyBar'
import PayTable from './PayTable'
import StateExplorer from './StateExplorer'

function App (state) {
  let stateExplorer = null
  if (state.stateExplorerShowing) {
    stateExplorer = StateExplorer(state)
  }

  return (
    <main>
      <section id='appContainer' className='app-container'>
        {PayTable(state.bet, state.handResult)}
        {Hand(state.hand, state.mode)}
        {MoneyBar(state.win, state.bet, state.credit)}
        {ActionBar(state.mode, state.hand)}
        {Footer()}
      </section>
      <section id='explorerContainer'>{stateExplorer}</section>
    </main>
  )
}

export default App
