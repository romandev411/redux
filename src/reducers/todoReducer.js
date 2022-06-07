import { ACTION_TYPES } from '../actions/actionTypes'

const initState = {
  todo: []
}

const todoReducer = (state = initState, action) => {
  switch (action.type) {
    case ACTION_TYPES.CREATE_TODO: {
      return [
        ...state,
        {
          id: Math.random(),
          ...action.value
        }
      ]
    }
  }
  return { ...state }
}

export default todoReducer
