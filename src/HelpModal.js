import React from 'react'

function HelpModal () {
  return (
    <div className='help-modal'>
      <h2>HOW TO PLAY JACKS OR BETTER</h2>
      <h4>Jacks or Better--Understanding the Hands:</h4>
      <ul>
        <li>High card: Any card that is a Jack or higher (J-A)</li>
        <li>Low card: Any card that is lower than a Jack (2-10)</li>
        <li>Royal Flush: 10, J, Q, K, A of all the same suit</li>
        <li>Straight Flush: Any five cards in sequential order of the same suit</li>
        <li>Four of a Kind: Four of the same numbers, face cards, or Aces</li>
        <li>Full House: Three of a kind and a pair</li>
        <li>Flush: Five cards of the same suit</li>
        <li>Three of a Kind: Three of the same numbers, face cards, or Aces</li>
        <li>Straight: Five cards in sequential order but not necessarily of the same suit</li>
        <li>Two Pair: Two pairs of cards of the same numbers, face cards, or Aces</li>
        <li>Pair: Two cards of the same numbers, face cards, or Aces</li>
        <li>Jacks or Better: Two Jacks, Queens, Kings, or Aces. The minimum hand needed to win</li>
      </ul>
      <br />
      <h4>How to bet:</h4>
      <p>Bet from one quarter to a max bet of $1.25. The pay table shows the return
        based on the bet placed. The max bet of $1.25 yields the highest ROYAL
        Flush return of 4,000 coins.
      </p>
      <h4>How to play:</h4>
      <p>Place your bet by pushing the 'BET ONE' or 'MAX BET' button. Now you are
        ready to deal the cards! The hand will display on the screen. Hold the cards
        you like by pressing or clicking the 'HOLD' button below the card. After holding
        the cards, press the 'DRAW' button to draw new cards. When the hand is over,
        start another hand by placing your bet and pressing the 'DEAL' button.
      </p>
      <button className='close-btn' onClick={closeHelp}>Close</button>
    </div>
  )
}

function closeHelp () {
  window.appState.isHelpModalShowing = false
}

export default HelpModal
