import React from 'react'

function PayTable (currentBet, handResult) {
  // highlights active-bet column
  let isActive1, isActive2, isActive3, isActive4, isActive5
  if (currentBet === 1) { isActive1 = 'active' }
  if (currentBet === 2) { isActive2 = 'active' }
  if (currentBet === 3) { isActive3 = 'active' }
  if (currentBet === 4) { isActive4 = 'active' }
  if (currentBet === 5) { isActive5 = 'active' }

  // highlights winning-row column on deal and draw

  return (
    <div className='pay-table-image-container'>
      <div className='pay-table'>
        <div className='hands-col'>
          <div className='row-class'>ROYAL FLUSH</div>
          <div className='row-class'>STRAIGHT FLUSH</div>
          <div className='row-class'>FOUR OF A KIND</div>
          <div className='row-class'>FULL HOUSE</div>
          <div className='row-class'>FLUSH</div>
          <div className='row-class'>STRAIGHT</div>
          <div className='row-class'>THREE OF A KIND</div>
          <div className='row-class'>TWO PAIR</div>
          <div className='row-class'>JACKS OR BETTER</div>
        </div>
        <div className={`bet-col + ${isActive1}`}>
          <div className='row-class'>250</div>
          <div className='row-class'>50</div>
          <div className='row-class'>25</div>
          <div className='row-class'>9</div>
          <div className='row-class'>6</div>
          <div className='row-class'>4</div>
          <div className='row-class'>3</div>
          <div className='row-class'>2</div>
          <div className='row-class'>1</div>
        </div>
        <div className={`bet-col + ${isActive2}`}>
          <div className='row-class'>500</div>
          <div className='row-class'>100</div>
          <div className='row-class'>50</div>
          <div className='row-class'>18</div>
          <div className='row-class'>12</div>
          <div className='row-class'>8</div>
          <div className='row-class'>6</div>
          <div className='row-class'>4</div>
          <div className='row-class'>2</div>
        </div>
        <div className={`bet-col + ${isActive3}`}>
          <div className='row-class'>750</div>
          <div className='row-class'>150</div>
          <div className='row-class'>75</div>
          <div className='row-class'>27</div>
          <div className='row-class'>18</div>
          <div className='row-class'>12</div>
          <div className='row-class'>9</div>
          <div className='row-class'>6</div>
          <div className='row-class'>3</div>
        </div>
        <div className={`bet-col + ${isActive4}`}>
          <div className='row-class'>1,000</div>
          <div className='row-class'>200</div>
          <div className='row-class'>100</div>
          <div className='row-class'>36</div>
          <div className='row-class'>24</div>
          <div className='row-class'>16</div>
          <div className='row-class'>12</div>
          <div className='row-class'>8</div>
          <div className='row-class'>4</div>
        </div>
        <div className={`bet-five-col + ${isActive5}`}>
          <div className='row-class'>4,000</div>
          <div className='row-class'>250</div>
          <div className='row-class'>125</div>
          <div className='row-class'>45</div>
          <div className='row-class'>30</div>
          <div className='row-class'>20</div>
          <div className='row-class'>15</div>
          <div className='row-class'>10</div>
          <div className='row-class'>5</div>
        </div>
      </div>
      <img src='images/jack_img.jpeg' className='jack_img' alt='Jack' />
    </div>
  )
}

export default PayTable
