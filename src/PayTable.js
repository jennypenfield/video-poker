import React from 'react'

function PayTable (currentBet) {
  return (
    <div className='pay-table'>
      <div className='hands-col'>
        <div>ROYAL FLUSH</div>
        <div>STRAIGHT FLUSH</div>
        <div>FOUR OF A KIND</div>
        <div>FULL HOUSE</div>
        <div>FLUSH</div>
        <div>STRAIGHT</div>
        <div>THREE OF A KIND</div>
        <div>TWO PAIR</div>
        <div>JACKS OR BETTER</div>
      </div>
      <div className='bet-col' id='bet1col'>
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
      <div className='bet-col' id='bet2col'>
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
      <div className='bet-col' id='bet3col'>
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
      <div className='bet-col' id='bet4col'>
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
      <div className='bet-five-col' id='bet5col'>
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
  )
}

export default PayTable
