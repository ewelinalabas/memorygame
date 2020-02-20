import { shuffle } from './utils';

export const GAME_SETUP = 'gameSetup'
export const PLAY = 'play'

const initialState = {
  phase: GAME_SETUP
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

  return { ...state, phase: PLAY, gameBoard: board }
}

const markMatchedCards = (state, matchValue) => {
  const newGameBoard = state.gameBoard.map(card => {
    if(card.value === matchValue) {
      card.visible = false
      card.matched = true
      return card
    } else {
      return card
    }
  })
  return { ...state, gameBoard: newGameBoard }
}

const faceCardsDown = (state) => {
  const newGameBoard = state.gameBoard.map(card => card.visible = false)
  return { ...state, gameBoard: newGameBoard }
}

const faceCardUp = (state, cardId) => {
  const newGameBoard = [ ...state.gameBoard ]
  const chosenCard = newGameBoard[cardId]
  !chosenCard.matched && (chosenCard.visible = true)
  return { ...state, gameBoard: newGameBoard }
}

export const rootReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'BUILD_BOARD':
      return buildBoard(state, action.payload);
    case 'FACE_CARD_UP':
      return faceCardUp(state, action.payload);
    case 'FACE_CARDS_DOWN':
      return faceCardsDown(state);
    case 'MARK_MATCHING_CARDS':
      return markMatchedCards(state, action.payload);
    default:
      return state
  } 
}
