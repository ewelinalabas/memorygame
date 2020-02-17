import { shuffle } from './utils';

const initialState = {
  phase: 'gameSetup'
}

const buildBoard = (state, numberOfElements) => {
  const availableValues = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J']
  const board = []
  for(let i = 0; i < numberOfElements / 2; i++) {
    const card = {
      pairId: i, 
      value: availableValues[i], 
      visible: false, 
      matched: false
    }
    const matchingCard = { ...card }
    board.push(card, matchingCard)
  }
  shuffle(board)

  return { ...state, phase: 'play', gameBoard: board }
}

export const rootReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'BUILD_BOARD':
      return buildBoard(state, action.value);
    default:
      return state
  } 
}
