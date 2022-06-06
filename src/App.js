import { connect } from 'react-redux'
import { increment, decrement, changeStep } from './actions/actionCreator'

function App (props) {
  const inc = () => {
    props.increment()
  }

  const dec = () => {
    props.decrement()
  }

  const inputChange = e => {
    props.changeStep(e.target.value)
  }

  return (
    <div className='App'>
      <button onClick={inc}>+</button>
      {props.count}
      <button onClick={dec}>-</button>
      <input type='number' value={props.step} onChange={inputChange} />
      {props.step}
    </div>
  )
}

const mapStateToProps = state => {
  return {
    count: state.count,
    step: state.step
  }
}

const wrappedApp = connect(mapStateToProps, {
  increment,
  decrement,
  changeStep
})(App)

export default wrappedApp
