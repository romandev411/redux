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

/////////

export const createTodo = value => {
  return {
    type: ACTION_TYPES.CREATE_TODO,
    value
  }
}

export const updateTodo = ({ id, value }) => {
  return {
    type: ACTION_TYPES.UPDATE_TODO,
    value,
    id
  }
}

export const deleteTodo = id => {
  return {
    type: ACTION_TYPES.DELETE_TODO,
    id
  }
}
