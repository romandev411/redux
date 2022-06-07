import countReducer from './countReducer'
import todoReducer from './todoReducer'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  count: countReducer,
  todo: todoReducer
})

export default rootReducer
