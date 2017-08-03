import React from 'react'

function PayTable (currentBet, handResult) {
  // highlights active-bet column
  let isActive1, isActive2, isActive3, isActive4, isActive5
  if (currentBet === 1) { isActive1 = 'active-col' }
  if (currentBet === 2) { isActive2 = 'active-col' }
  if (currentBet === 3) { isActive3 = 'active-col' }
  if (currentBet === 4) { isActive4 = 'active-col' }
  if (currentBet === 5) { isActive5 = 'active-col' }

  // highlights winning-hand column
  let isActiveRF, isActiveSF, isActive4K, isActiveFH, isActiveF, isActiveS,
    isActive3K, isActive2p, isActiveJoB
  if (handResult === 'royalFlush') { isActiveRF = 'active-row' }
  if (handResult === 'straightFlush') { isActiveSF = 'active-row' }
  if (handResult === 'fourOfAKind') { isActive4K = 'active-row' }
  if (handResult === 'fullHouse') { isActiveFH = 'active-row' }
  if (handResult === 'flush') { isActiveF = 'active-row' }
  if (handResult === 'straight') { isActiveS = 'active-row' }
  if (handResult === 'threeOfAKind') { isActive3K = 'active-row' }
  if (handResult === 'twoPair') { isActive2p = 'active-row' }
  if (handResult === 'jacksOrBetter') { isActiveJoB = 'active-row' }

  return (
    <div className='pay-table-image-container'>
      <div className='pay-table'>
        <div className='hand-name-col'>
          <div id={isActiveRF}>ROYAL FLUSH</div>
          <div id={isActiveSF}>STRAIGHT FLUSH</div>
          <div id={isActive4K}>FOUR OF A KIND</div>
          <div id={isActiveFH}>FULL HOUSE</div>
          <div id={isActiveF}>FLUSH</div>
          <div id={isActiveS}>STRAIGHT</div>
          <div id={isActive3K}>THREE OF A KIND</div>
          <div id={isActive2p}>TWO PAIR</div>
          <div id={isActiveJoB}>JACKS OR BETTER</div>
        </div>
        <div className={`bet-col + ${isActive1}`}>
          <div>250</div>
          <div>50</div>
          <div>25</div>
          <div>9</div>
          <div>6</div>
          <div>4</div>
          <div>3</div>
          <div>2</div>
          <div>1</div>
        </div>
        <div className={`bet-col + ${isActive2}`}>
          <div>500</div>
          <div>100</div>
          <div>50</div>
          <div>18</div>
          <div>12</div>
          <div>8</div>
          <div>6</div>
          <div>4</div>
          <div>2</div>
        </div>
        <div className={`bet-col + ${isActive3}`}>
          <div>750</div>
          <div>150</div>
          <div>75</div>
          <div>27</div>
          <div>18</div>
          <div>12</div>
          <div>9</div>
          <div>6</div>
          <div>3</div>
        </div>
        <div className={`bet-col + ${isActive4}`}>
          <div>1,000</div>
          <div>200</div>
          <div>100</div>
          <div>36</div>
          <div>24</div>
          <div>16</div>
          <div>12</div>
          <div>8</div>
          <div>4</div>
        </div>
        <div className={`bet-five-col + ${isActive5}`}>
          <div>4,000</div>
          <div>250</div>
          <div>125</div>
          <div>45</div>
          <div>30</div>
          <div>20</div>
          <div>15</div>
          <div>10</div>
          <div>5</div>
        </div>
      </div>
      <img src='images/jack_img.jpeg' className='jack_img' alt='Jack' />
    </div>
  )
}

export default PayTable
