import React from 'react'

function MoneyBar (win, bet, credit) {
  let showWin = null
  if (win !== 0) showWin = 'WIN'
  let showWinAmt = null
  if (win !== 0) showWinAmt = win

  return (
    <div className='money-bar'>
      <div className='win'>
        {showWin} {showWinAmt}
      </div>
      <div className='bet-amount'>
        BET {bet}
      </div>
      <div className='credit'>
        CREDIT {credit}
      </div>
    </div>
  )
}

export default MoneyBar
