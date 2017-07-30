import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import {deepCopy} from './util'

const dummyHand = [
  {card: '2c', isHeld: false, drawCard: '4d'},
  {card: 'As', isHeld: true, drawCard: '5s'},
  {card: '3s', isHeld: false, drawCard: 'Ad'},
  {card: 'Jd', isHeld: true, drawCard: 'Ac'},
  {card: '7s', isHeld: false, drawCard: 'Ks'}
]

const INITIAL_STATE = {
  bet: 1,
  credit: 100,
  mode: 'deal',
  hand: deepCopy(dummyHand),
  handResult: {winningHand: '', rank: 0},
  win: 0,
  stateExplorerShowing: (document.location.search.indexOf('stateexplorer') !== -1)
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
