import { ACTION_TYPES } from '../actions/actionTypes'

const initState = {
  count: 0,
  step: 1
}

const countReducer = (state = initState, action) => {
  switch (action.type) {
    case ACTION_TYPES.INCREMENT: {
      return { ...state, count: state.count + state.step }
    }
    case ACTION_TYPES.DECREMENT: {
      return { ...state, count: state.count - state.step }
    }
    case ACTION_TYPES.STEP: {
      return { ...state, step: action.value }
    }
  }
  return { ...state }
}

export default countReducer
