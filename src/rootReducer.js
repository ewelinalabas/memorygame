const initialState = {
  phase: 0
}

export const rootReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'SET_BOARD_SIZE':
      return { ...state, phase: 1, boardSize: action.value };
    default:
      return state
  } 
}
