import React from 'react'
import ActionBar from './ActionBar'
import Footer from './Footer'
import Hand from './Hand'
import MoneyBar from './MoneyBar'
import PayTable from './PayTable'
import { FeedTwentyModal, HandResultModal } from './Modals'
import StateExplorer from './StateExplorer'

function App (state) {
  let stateExplorer = null
  if (state.stateExplorerShowing) {
    stateExplorer = StateExplorer(state)
  }

  let feedTwenty = null
  if (state.credit === 0 && state.mode === 'deal') feedTwenty = FeedTwentyModal()

  return (
    <main>
      <section id='appContainer' className='app-container'>
        {HandResultModal(state.handResult.winningHand, state.mode, state.isGameOverModalShowing)}
        {feedTwenty}
        {PayTable(state.bet, state.handResult.winningHand)}
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
