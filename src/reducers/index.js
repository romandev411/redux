const initState = {
  count: 0,
  step: 1
}

export const reducer = (state = initState, action) => {
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
