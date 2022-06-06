export const increment = () => {
  return {
    type: 'increment'
  }
}

export const decrement = () => {
  return {
    type: 'decrement'
  }
}

export const changeStep = value => {
  return {
    type: 'step',
    value
  }
}
