import React from 'react'

function PayTable (currentBet) {
  return (
    <div className='pay-table'>
      <div className='hands-col'>
        <div className='row1'>ROYAL FLUSH</div>
        <div className='row2'>STRAIGHT FLUSH</div>
        <div className='row3'>FOUR OF A KIND</div>
        <div className='row4'>FULL HOUSE</div>
        <div className='row5'>FLUSH</div>
        <div className='row6'>STRAIGHT</div>
        <div className='row7'>THREE OF A KIND</div>
        <div className='row8'>TWO PAIR</div>
        <div className='row9'>JACKS OR BETTER</div>
      </div>
      <div className='bet-col' id='bet1col'>
        <div className='row1'>250</div>
        <div className='row2'>50</div>
        <div className='row3'>25</div>
        <div className='row4'>9</div>
        <div className='row5'>6</div>
        <div className='row6'>4</div>
        <div className='row7'>3</div>
        <div className='row8'>2</div>
        <div className='row9'>1</div>
      </div>
      <div className='bet-col' id='bet2col'>
        <div className='row1'>500</div>
        <div className='row2'>100</div>
        <div className='row3'>50</div>
        <div className='row4'>18</div>
        <div className='row5'>12</div>
        <div className='row6'>8</div>
        <div className='row7'>6</div>
        <div className='row8'>4</div>
        <div className='row9'>2</div>
      </div>
      <div className='bet-col' id='bet3col'>
        <div className='row1'>750</div>
        <div className='row2'>150</div>
        <div className='row3'>75</div>
        <div className='row4'>27</div>
        <div className='row5'>18</div>
        <div className='row6'>12</div>
        <div className='row7'>9</div>
        <div className='row8'>6</div>
        <div className='row9'>3</div>
      </div>
      <div className='bet-col' id='bet4col'>
        <div className='row1'>1,000</div>
        <div className='row2'>200</div>
        <div className='row3'>100</div>
        <div className='row4'>36</div>
        <div className='row5'>24</div>
        <div className='row6'>16</div>
        <div className='row7'>12</div>
        <div className='row8'>8</div>
        <div className='row9'>4</div>
      </div>
      <div className='bet-five-col' id='bet5col'>
        <div className='row1'>4,000</div>
        <div className='row2'>250</div>
        <div className='row3'>125</div>
        <div className='row4'>45</div>
        <div className='row5'>30</div>
        <div className='row6'>20</div>
        <div className='row7'>15</div>
        <div className='row8'>10</div>
        <div className='row9'>5</div>
      </div>
    </div>
  )
}

export default PayTable
