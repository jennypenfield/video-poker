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
  credit: 80,
  mode: 'deal',
  hand: deepCopy(dummyHand),
  handResult: {winningHand: '', rank: 0},
  isGameOverModalShowing: true,
  isHelpModalShowing: false,
  win: 0,
  stateExplorerShowing: (document.location.search.indexOf('stateexplorer') !== -1)
}

window.appState = deepCopy(INITIAL_STATE)

// -----------------------------------------------------------------------------
// Render Loop
// -----------------------------------------------------------------------------

const rootEl = document.getElementById('root')

function renderNow () {
  saveState()
  ReactDOM.render(App(window.appState), rootEl)
  window.requestAnimationFrame(renderNow)
}

getSavedState()

window.requestAnimationFrame(renderNow)

function saveState () {
  window.localStorage.state = JSON.stringify(window.appState)
}

function getSavedState () {
  let local = window.localStorage.state
  window.appState = safelyParseJSON(local)
}

function safelyParseJSON (local) {
  try {
    return JSON.parse(local)
  } catch (e) {
    return window.appState
  }
}
