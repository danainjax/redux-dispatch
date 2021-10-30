let state = { count: 0 }

function changeState(state, action) {
  switch (action.type) {
    case 'INCREASE_COUNT':
      return { count: state.count + 1 }
    default:
      return state
  }
}

function dispatch(action) {
  console.log(state)
  state = changeState(state, action)
  render()
}

render = () => (document.body.textContent = state.count + ' ' + "Let's go...!")
