import { connect } from 'react-redux'
import { increment, decrement, changeStep } from '../../actions/actionCreator'

function Counter (props) {
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
    <div className='Counter'>
      <button onClick={inc}>+</button>
      {props.count}
      <button onClick={dec}>-</button>
      <input type='number' value={props.step} onChange={inputChange} />
      {props.step}
    </div>
  )
}

const mapStateToProps = ({ count: { count, step } }) => {
  return {
    count,
    step
  }
}

const wrappedApp = connect(mapStateToProps, {
  increment,
  decrement,
  changeStep
})(Counter)

export default wrappedApp
