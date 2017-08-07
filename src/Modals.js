import React from 'react'

function FeedTwentyModal () {
  return (
    <div className='feed-twenty-modal'>
      <p>Looks like you're out of money.
        Do you want to play another $20?
      </p>
      <button className='yesNoButton' onClick={ClickNo20}>No</button>
      <button className='yesNoButton' onClick={clickYes20}>Yes</button>
    </div>
  )
}

function ClickNo20 () {
  window.appState.credit = 1
}

function clickYes20 () {
  window.appState.credit = 80
  window.appState.bet = 1
}

function HandResultModal (hand, mode, isGameOverModalShowing) {
  if (mode !== 'deal' || isGameOverModalShowing === false) return
  if (hand !== '') {
    return (
      <div className='modal-text'>
        {hand}
      </div>
    )
  } else {
    return (
      <div className='modal-text'>
        Try Again
      </div>
    )
  }
}

export {
  FeedTwentyModal,
  HandResultModal
}
