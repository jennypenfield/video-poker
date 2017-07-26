import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import {deepCopy} from './util'

const dummyHand = [
  {card: '2c', isHeld: false},
  {card: 'As', isHeld: true},
  {card: '3s', isHeld: false},
  {card: 'Jd', isHeld: true},
  {card: '7s', isHeld: false}
]

const INITIAL_STATE = {
  bet: 1,
  credit: 100,
  mode: 'deal',
  hand: deepCopy(dummyHand),
  stateExplorerShowing: (document.location.search.indexOf('stateexplorer') !== -1),
  win: 0
}

window.appState = deepCopy(INITIAL_STATE)

// -----------------------------------------------------------------------------
// Render Loop
// -----------------------------------------------------------------------------

const rootEl = document.getElementById('root')

function renderNow () {
  ReactDOM.render(App(window.appState), rootEl)
  window.requestAnimationFrame(renderNow)
}

window.requestAnimationFrame(renderNow)
