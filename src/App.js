import React from 'react'
import ActionBar from './ActionBar'
import Footer from './Footer'
import Hand from './Hand'
import MoneyBar from './MoneyBar'
import PayTable from './PayTable'
import PlayFiveCreditsModal from './PlayFiveCreditsModal'
import StateExplorer from './StateExplorer'

function App (state) {
  let stateExplorer = null
  if (state.stateExplorerShowing) {
    stateExplorer = StateExplorer(state)
  }
  let playFiveCreditsModal = null
  if (state.isPlayFiveCreditsShowing === true) { playFiveCreditsModal = PlayFiveCreditsModal() }

  return (
    <main>
      <section id='appContainer' className='app-container'>
        {playFiveCreditsModal}
        {PayTable(state.bet, state.handResult.winningHand)}
        {Hand(state.hand, state.mode)}
        {MoneyBar(state.win, state.bet, state.credit)}
        {ActionBar(state.mode, state.hand)}
        {Footer()}
      </section>
      {/* <section id='explorerContainer'>{stateExplorer}</section> */}
    </main>
  )
}

export default App
