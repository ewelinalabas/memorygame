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

const makeMove = (state, cardId) => {
  const newGameBoard = [ ...state.gameBoard ]
  newGameBoard[cardId].visible = true

  return { ...state, gameBoard: newGameBoard }
}

export const rootReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'BUILD_BOARD':
      return buildBoard(state, action.value);
    case 'MAKE_MOVE':
      return makeMove(state, action.id)
    default:
      return state
  } 
}
