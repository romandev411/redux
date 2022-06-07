import { ACTION_TYPES } from '../actions/actionTypes'

export const increment = () => {
  return {
    type: ACTION_TYPES.INCREMENT
  }
}

export const decrement = () => {
  return {
    type: ACTION_TYPES.DECREMENT
  }
}

export const changeStep = value => {
  return {
    type: ACTION_TYPES.STEP,
    value
  }
}
