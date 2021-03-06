import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import {deepCopy} from './util'

const dummyHand = [
  {card: '2c', isHeld: true, drawCard: '4d'},
  {card: 'As', isHeld: true, drawCard: '5s'},
  {card: '3s', isHeld: false, drawCard: '7d'},
  {card: 'Jd', isHeld: true, drawCard: 'Ac'},
  {card: '7s', isHeld: true, drawCard: 'Ks'}
]

const INITIAL_STATE = {
  bet: 1,
  credit: 80,
  mode: 'deal',
  hand: deepCopy(dummyHand),
  handResult: {winningHand: '', rank: 0},
  isDrawButtonActive: true,
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
  window.sessionStorage.state = JSON.stringify(window.appState)
}

function getSavedState () {
  let local = window.sessionStorage.state
  window.appState = safelyParseJSON(local)
}

function safelyParseJSON (local) {
  try {
    return JSON.parse(local)
  } catch (e) {
    return window.appState
  }
}
