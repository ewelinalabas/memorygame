const initialState = {
  phase: 'gameSetup'
}

export const rootReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'SET_BOARD_SIZE':
      return { ...state, phase: 'play', boardSize: action.value };
    default:
      return state
  } 
}
