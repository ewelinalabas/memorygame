import { shuffle } from './utils';

const initialState = {
  phase: 'gameSetup'
}

const buildBoard = (state, numberOfElements) => {
  const availableValues = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J']
  const board = []
  for(let i = 0; i < numberOfElements / 2; i++) {
    const card = {
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

const validateIfNotMatched = (card) => {
  return card.matched ? false : true
}

const markMatchedCards = (state, matchValue) => {
  const newGameBoard = [ ...state.gameBoard ]
  for(let i = 0; i < newGameBoard.length; i++) {
    if(newGameBoard[i].value === matchValue) {
      newGameBoard[i].visible = false
      newGameBoard[i].matched = true
    }
  }
  return { ...state, gameBoard: newGameBoard }
}

const faceCardsDown = (state) => {
  const newGameBoard = [ ...state.gameBoard ]
  for(let i = 0; i < newGameBoard.length; i++) {
    newGameBoard[i].visible = false
  }
  return { ...state, gameBoard: newGameBoard }
}

const faceCardUp = (state, cardId) => {
  const newGameBoard = [ ...state.gameBoard ]
  const chosenCard = newGameBoard[cardId]
  validateIfNotMatched(chosenCard) && (chosenCard.visible = true)
  return { ...state, gameBoard: newGameBoard }
}

export const rootReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'BUILD_BOARD':
      return buildBoard(state, action.value);
    case 'FACE_CARD_UP':
      return faceCardUp(state, action.id);
    case 'FACE_CARDS_DOWN':
      return faceCardsDown(state);
    case 'MARK_MATCHING_CARDS':
      return markMatchedCards(state, action.value);
    default:
      return state
  } 
}
