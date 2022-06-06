import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

const initState = {
  count: 0,
  step: 1
}

const reducer = (state = initState, action) => {
  console.log(action.type)
  switch (action.type) {
    case 'increment': {
      return { ...state, count: state.count + state.step }
    }
    case 'decrement': {
      return { ...state, count: state.count - state.step }
    }
    case 'step': {
      return { ...state, step: action.value }
    }
  }
  return { ...state }
}

const store = createStore(reducer)

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <Provider store={store}>
    <App />
  </Provider>
)
